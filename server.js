import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import routes from './src/controllers/routes.js'
import { addLocalVariables } from './src/middleware/global.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const NODE_ENV = (process.env.NODE_ENV || 'production').toLowerCase()
const PORT = process.env.PORT || 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

// Global middleware
app.use(addLocalVariables)

// Application routes
app.use('/', routes)

// 404 handler
app.use((req, res, next) => {
    const error = new Error(`Page not found: ${req.originalUrl}`)
    error.status = 404
    next(error)
})

// Global error handler
app.use((err, req, res, next) => {
    if (res.headersSent || res.finished) {
        return next(err)
    }

    const status = err.status || 500
    const template = status === 404 ? '404' : '500'

    res.status(status)

    const errorContext = {
        title: status === 404 ? 'Page Not Found' : 'Server Error',
        error: err.message || 'An unexpected error occurred.',
        stack: NODE_ENV === 'development' ? err.stack : null,
        NODE_ENV
    }

    res.render(`errors/${template}`, errorContext, (renderError, html) => {
        if (renderError) {
            res.send(`
                <h1>${errorContext.title}</h1>
                <p>${errorContext.error}</p>
            `)
            return
        }

        res.send(html)
    })
})

// Development WebSocket server
if (NODE_ENV === 'development') {
    import('ws').then(({ WebSocketServer }) => {
        const wsPort = Number(PORT) + 1
        const wss = new WebSocketServer({ port: wsPort })

        wss.on('connection', (ws) => {
            ws.send('WebSocket connection established.')

            ws.on('message', (message) => {
                console.log(`WebSocket message: ${message}`)
            })
        })

        console.log(`WebSocket server running on port ${wsPort}`)
    })
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log(`Environment: ${NODE_ENV}`)
})
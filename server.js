import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

/**
 * Declare Important Variables
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

/**
 * Setup Express Server
 */
const app = express();

/**
 * Configure Express
 */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find the EJS templates
app.set('views', path.join(__dirname, 'src/views'));

/**
 * Routes
 */

// Home page
app.get('/', (req, res) => {
    const title = 'Welcome Home';

    res.render('home', {
        title
    });
});

// About page
app.get('/about', (req, res) => {
    const title = 'About Me';

    res.render('about', {
        title
    });
});

// Products page
app.get('/products', (req, res) => {
    const title = 'Our Products';

    res.render('products', {
        title
    });
});

// Student information challenge
app.get('/student', (req, res) => {
    const title = 'Student Information';

    const student = {
        name: 'Andrew Lawrence',
        id: '123456',
        email: 'student@example.com',
        address: 'Rexburg, Idaho'
    };

    res.render('student', {
        title,
        student
    });
});

/**
 * 404 Handler
 */
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

/**
 * Start the Server
 */
app.listen(PORT, () => {
    console.log(
        `Server is running in ${NODE_ENV} mode at http://127.0.0.1:${PORT}`
    );
});
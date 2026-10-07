import express from 'express'

import { addDemoHeaders } from '../middleware/demo/headers.js'

import {
    catalogPage,
    courseDetailPage
} from './catalog/catalog.js'

import {
    homePage,
    aboutPage,
    demoPage,
    testErrorPage
} from './index.js'

const router = express.Router()

// Home
router.get('/', homePage)

// About
router.get('/about', aboutPage)

// Course catalog
router.get('/catalog', catalogPage)

// Course details
router.get('/catalog/:courseId', courseDetailPage)

// Middleware demonstration
router.get('/demo', addDemoHeaders, demoPage)

// Test error page
router.get('/test-error', testErrorPage)

export default router
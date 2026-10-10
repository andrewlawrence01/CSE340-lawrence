import express from 'express';

import {
facultyListPage,
facultyDetailPage
} from './faculty/faculty.js';

import { addDemoHeaders } from '../middleware/demo/headers.js';

const router = express.Router();

// Faculty routes
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);

// Keep your other existing routes below or above these routes.
// Do not remove your course catalog routes.

export default router;

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
import {
    getFacultyById,
    getSortedFaculty
} from '../../models/faculty/faculty.js';

/**
 * Display the faculty directory.
 */
const facultyListPage = async (req, res) => {
    // Get the requested sorting option from the query string
    const sortBy = req.query.sort || 'name';

    // Get the sorted faculty list
    const faculty = getSortedFaculty(sortBy);

    // Render the faculty list page
    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty,
        sortBy
    });
};

/**
 * Display an individual faculty member.
 */
const facultyDetailPage = async (req, res, next) => {
    try {
        // Get the faculty ID from the route parameter
        const { facultyId } = req.params;

        // Look up the faculty member
        const faculty = getFacultyById(facultyId);

        // If the faculty member does not exist, return a 404
        if (!faculty) {
            const error = new Error('Faculty member not found.');
            error.status = 404;
            return next(error);
        }

        // Render the faculty detail page
        res.render('faculty/detail', {
            title: faculty.name,
            faculty
        });
    } catch (error) {
        next(error);
    }
};

export {
    facultyListPage,
    facultyDetailPage
};
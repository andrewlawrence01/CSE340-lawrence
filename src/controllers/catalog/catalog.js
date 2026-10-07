import {
    getAllCourses,
    getCourseById,
    getSortedSections
} from '../../models/catalog/catalog.js'

function catalogPage(req, res) {
    const courses = getAllCourses()

    res.render('catalog', {
        title: 'Course Catalog',
        courses
    })
}

function courseDetailPage(req, res, next) {
    const courseId = req.params.courseId

    if (!courseId) {
        const error = new Error('Course ID is required.')
        error.status = 404
        return next(error)
    }

    const course = getCourseById(courseId)

    if (!course) {
        const error = new Error(`Course ${courseId} was not found.`)
        error.status = 404
        return next(error)
    }

    const currentSort = req.query.sort || 'time'

    const sortedSections = getSortedSections(course, currentSort)

    const courseWithSortedSections = {
        ...course,
        sections: sortedSections
    }

    res.render('course-detail', {
        title: `${course.id} - ${course.title}`,
        course: courseWithSortedSections,
        currentSort
    })
}

export {
    catalogPage,
    courseDetailPage
}
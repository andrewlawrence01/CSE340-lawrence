const courses = [
    {
        id: 'CS121',
        title: 'Introduction to Programming',
        department: 'Computer Science',
        description:
            'An introduction to programming concepts, problem solving, and fundamental programming techniques.',
        credits: 3,
        sections: [
            {
                time: '9AM',
                room: 'STC392',
                professor: 'Brother Jack'
            },
            {
                time: '2PM',
                room: 'STC394',
                professor: 'Sister Enkey'
            },
            {
                time: '11AM',
                room: 'STC390',
                professor: 'Brother Keers'
            }
        ]
    },

    {
        id: 'CS162',
        title: 'Introduction to Computer Science',
        department: 'Computer Science',
        description:
            'An introduction to computer science concepts, computational thinking, and problem solving.',
        credits: 3,
        sections: [
            {
                time: '10AM',
                room: 'STC392',
                professor: 'Brother Jack'
            },
            {
                time: '1PM',
                room: 'STC394',
                professor: 'Sister Enkey'
            }
        ]
    },

    {
        id: 'MATH113',
        title: 'College Algebra',
        department: 'Mathematics',
        description:
            'A study of algebraic concepts and techniques used in college-level mathematics.',
        credits: 3,
        sections: [
            {
                time: '8AM',
                room: 'STC290',
                professor: 'Sister Peterson'
            },
            {
                time: '11AM',
                room: 'STC292',
                professor: 'Brother Thompson'
            },
            {
                time: '3PM',
                room: 'STC290',
                professor: 'Sister Anderson'
            }
        ]
    },

    {
        id: 'MATH119',
        title: 'Calculus I',
        department: 'Mathematics',
        description:
            'An introduction to differential and integral calculus and their applications.',
        credits: 4,
        sections: [
            {
                time: '9AM',
                room: 'STC290',
                professor: 'Brother Thompson'
            },
            {
                time: '2PM',
                room: 'STC292',
                professor: 'Sister Anderson'
            }
        ]
    },

    {
        id: 'ENG101',
        title: 'College Writing',
        department: 'English',
        description:
            'An introduction to academic writing, research, organization, and effective communication.',
        credits: 3,
        sections: [
            {
                time: '10AM',
                room: 'GEB201',
                professor: 'Sister Anderson'
            },
            {
                time: '12PM',
                room: 'GEB205',
                professor: 'Brother Davis'
            },
            {
                time: '4PM',
                room: 'GEB203',
                professor: 'Sister Enkey'
            }
        ]
    },

    {
        id: 'ENG102',
        title: 'Composition and Literature',
        department: 'English',
        description:
            'A continuation of college writing with an emphasis on composition and literary analysis.',
        credits: 3,
        sections: [
            {
                time: '11AM',
                room: 'GEB201',
                professor: 'Brother Davis'
            },
            {
                time: '1PM',
                room: 'GEB205',
                professor: 'Sister Enkey'
            }
        ]
    },

    {
        id: 'HIST105',
        title: 'World History',
        department: 'History',
        description:
            'A survey of major historical events, people, cultures, and developments throughout world history.',
        credits: 3,
        sections: [
            {
                time: '9AM',
                room: 'GEB301',
                professor: 'Brother Wilson'
            },
            {
                time: '2PM',
                room: 'GEB305',
                professor: 'Sister Roberts'
            }
        ]
    }
]

function getAllCourses() {
    return courses
}

function getCourseById(courseId) {
    return courses.find(course => course.id === courseId)
}

function getSortedSections(course, sortBy = 'time') {
    const sections = [...course.sections]

    sections.sort((a, b) => {
        if (sortBy === 'professor') {
            return a.professor.localeCompare(b.professor)
        }

        if (sortBy === 'room') {
            return a.room.localeCompare(b.room)
        }

        return a.time.localeCompare(b.time)
    })

    return sections
}

function getCoursesByDepartment(department) {
    return courses.filter(course => course.department === department)
}

export {
    getAllCourses,
    getCourseById,
    getSortedSections,
    getCoursesByDepartment
}
const languages = [
    {
        id: 1,
        title: "Java",
        style: "shadow-red-500",
    },
    {
        id: 2,
        title: "Python",
        style: "shadow-blue-400",
    },
    {
        id: 3,
        title: "JavaScript",
        style: "shadow-yellow-500",
    },
    {
        id: 4,
        title: "Dart",
        style: "shadow-sky-300",
    },
    {
        id: 5,
        title: "C",
        style: "shadow-blue-700",
    },
    {
        id: 6,
        title: "MATLAB",
        style: "shadow-red-600",
    },
    {
        id: 7,
        title: "R",
        style: "shadow-sky-200",
    },
];

const webDesign = [
    {
        id: 1,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        title: "Bootstrap",
        style: "shadow-purple-600",
    },
    {
        id: 4,
        title: "Tailwind CSS",
        style: "shadow-sky-400",
    }
]

const deployment = [
    {
        id: 1,
        title: "Google Cloud",
        style: "shadow-yellow-500",
    },
    {
        id: 2,
        title: "Heroku",
        style: "shadow-purple-600",
    },
    {
        id: 3,
        title: "Firebase",
        style: "shadow-orange-600",
    },
]

const toolkits = [
    {
        id: 1,
        title: "React",
        style: "shadow-sky-200",
    },
    {
        id: 2,
        title: "Spring",
        style: "shadow-green-500",
    },
    {
        id: 3,
        title: "Flutter",
        style: "shadow-sky-400",
    },
]

const db = [
    {
        id: 1,
        title: "MySQL",
        style: "shadow-blue-800",
    },
    {
        id: 2,
        title: "MariaDB",
        style: "shadow-gray-400",
    },
]

const other = [
    {
        id: 1,
        title: "git",
        style: "shadow-orange-600",
    },
    {
        id: 2,
        title: "npm",
        style: "shadow-red-400",
    },
]

const techs = [languages, webDesign, deployment, toolkits, db, other]


techs.map(
    (tech => (
        tech.map(
            t => (
                console.log(t)
            )
        )
    ))
)
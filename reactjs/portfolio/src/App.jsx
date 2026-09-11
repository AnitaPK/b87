import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Qualification from './components/Qualification'

function App() {
const userD={
        name:"Your Name", 
        description:"The primary users of your portfolio are recruiting managers, hiring leads, and peer designers who want to quickly evaluate your problem-solving skills, work process, and cultural fit."
        }
const qualifications = [
    {
        title: "Bachelor of Engineering",
        subtitle: "Computer Science",
        institution: "ABC Institute of Technology",
        duration: "2016 - 2020",
        grade: "8.5 CGPA"
    },
    {
        title: "Higher Secondary Certificate",
        subtitle: "Science",
        institution: "XYZ Junior College",
        duration: "2014 - 2016",
          grade: "82%"
    },
    {
        title: "Secondary School Certificate",
        subtitle: "SSC",
        institution: "XYZ High School",
        duration: "2014",
          grade: "90%"
    }
];
const aboutMe = {


    skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "REST API",
        "MongoDB",
        "MySQL",
        "Git & GitHub",
    ],

    technologies: {
        frontend: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Bootstrap",
            "Redux Toolkit"
        ],

        backend: [
            "Node.js",
            "Express.js",
            "REST API",
            "JWT Authentication",
            "Multer"
        ],

        database: [
            "MongoDB",
            "MySQL",
        ],

        genAI: [
            "Generative AI",
            "LLMs",
            "Prompt Engineering",
            "OpenAI API",
            "AI Chatbots",
            "RAG"
        ]
    },

    developmentAreas: [
        "Web Application Development",
        "REST API Development",
        "Authentication & Authorization",
        "Database Design",
        "AI-powered Applications"
    ],

    interests: [
        "Building real-world projects",
        "Learning new technologies",
        "AI & Generative AI"
    ]
};

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "MERN Stack",
        description:
            "A full-stack e-commerce platform with product management, user authentication, shopping cart, orders, payments, and admin dashboard.",

        features: [
            "User Registration & Login",
            "Product Listing & Search",
            "Product Categories",
            "Shopping Cart",
            "Wishlist",
            "Order Management",
            "Admin Dashboard",
            "JWT Authentication"
        ],

        role: "Full Stack Developer",

        github: "https://github.com/yourusername/ecommerce",
        liveDemo: "https://your-ecommerce-demo.com",

        image: "/projects/ecommerce.png"
    },

    {
        id: 2,
        title: "Learning Management System",
        category: "MERN Stack",
        description:
            "A role-based Learning Management System where admins, instructors, and students can manage courses, lectures, enrollments, quizzes, and learning progress.",

        features: [
            "Admin Dashboard",
            "Instructor Management",
            "Course Management",
            "Lecture Management",
            "Student Enrollment",
            "Video Lectures",
            "Quiz & Assessment",
            "Progress Tracking",
            "Role-Based Access",
            "Cloudinary File Upload"
        ],

        role: "Full Stack Developer",

        github: "https://github.com/yourusername/mern-lms",
        liveDemo: "https://your-lms-demo.com",

        image: "/projects/lms.png"
    },

    {
        id: 3,
        title: "Project Management System",
        category: "MERN Stack",
        description:
            "A project management application that helps teams manage projects, assign tasks, track progress, and manage users with role-based access.",

        features: [
            "User Authentication",
            "Role-Based Access",
            "Project Management",
            "Task Assignment",
            "Task Tracking",
            "User Management",
            "HOD Management",
            "Admin Approval System",
            "Document Upload",
            "Dashboard & Reports"
        ],

        role: "Full Stack Developer",

        github: "https://github.com/yourusername/project-management",
        liveDemo: "https://your-project-demo.com",

        image: "/projects/project-management.png"
    }
];
        return (
    <>
     <Navbar />
      <Header userDetails={userD}></Header>
      <Qualification qua={qualifications}></Qualification>
          <Projects projects={projects}/>
        <AboutMe myInfo={aboutMe} myName={userD}/>
      <ContactMe />
     <Footer />
    </>
  )
}

export default App

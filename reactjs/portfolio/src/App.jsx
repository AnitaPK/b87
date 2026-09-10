import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
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
const myInfo ={

}
        return (
    <>
     <Navbar />
      <Header userDetails={userD}></Header>
      <Qualification qua={qualifications}></Qualification>

        <AboutMe myInfo={myInfo} />
      <ContactMe />
     <Footer />
    </>
  )
}

export default App

import ProjectCards from '../../Components/ProjectCardReusable/ProjectCard'
import projects from '../../Data/Projects-Data'
import demoImage from '../../Image/Rectangle 10.png'
import './ProjectPage.css'

const Projects = ({ command }) => {

    return (
        <div className='project-section'>
            <ProjectCards projects={ projects.filter(project => project.category === command) } />
        </div>
    )
}

export default Projects
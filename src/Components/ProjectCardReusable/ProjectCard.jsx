import './ProjectCard.css'
import demoImage from '../../Image/Rectangle 10.png'

const ContentBox = ({ project }) => {
    return (
        <div className='content-box'>
            <p className='project-name'>{ project.name.toUpperCase() }</p>
            <p className='project-category'>{ project.overview }</p>
            <p className='project-description'>{ project.content }</p>
            <p className='read-more'>
                <a href={ project.github } target='_blank' rel='noopener noreferrer' className='project-link'>
                        Read More...
                </a>
            </p>
        </div>
    )
}

const ImageBox = ({ project }) => {
    return (
        <div className='image-box'>
            <img src={ demoImage } alt="Demo Project" className='project-image'/>
        </div>
    )
}

const ProjectCards = ({ projects }) => {

    return (
        <>
            {projects.map((project, index) => (
                <div className='card-container' key={ project.id }> 
                    { index % 2 === 0 ? (
                        <>
                            <ContentBox project={ project } />
                            <ImageBox project={ project } />
                        </>
                    ) : ( 
                        <>
                            <ImageBox project={ project } />
                            <ContentBox project={ project } />
                        </>
                    )}
                </div>
            ))}
        </>
    )
}

export default ProjectCards
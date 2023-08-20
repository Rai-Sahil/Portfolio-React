import './ProjectCard.css'
import demoImage from '../../Image/Rectangle 10.png'

const ContentBox = ({ project }) => {
    return (
        <div className='content-box'>
            <p className='project-name'>{ project.name.toUpperCase() }</p>
            <p className='project-category'>{ project.overview }</p>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem</p>
            <p className='read-more'>
                Read More...
            </p>
        </div>
    )
}

const ImageBox = ({ project }) => {
    return (
        <div className='image-box'>
            <img src={ demoImage } className='project-image'/>
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
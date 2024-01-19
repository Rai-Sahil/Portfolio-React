import Headings from '../../Components/SubHeaders/SubHeader';
import './ExperiencePage.css'
import universityImage from '../../Image/ExperienceSection/University.png'
import jobsImage from '../../Image/ExperienceSection/jobs.png'
import researchImage from '../../Image/ExperienceSection/free-ieee-283154.png'

const ExperiencePage = () => {
    
    return (
        <>
            <Headings context='Explore my' main_word='Experience' />

            <div className='expirience-container'>

            <div className='watch-container' />
                <div className='exerience-card-coontainer'>
                    <div className='cards'>
                    <div className='exp-card1'>
                        <p className='exp-card-content'>
                            2022
                        </p>
                        <div className='description'>Accenture Internship</div>
                    </div>

                    <div className='exp-card2'>
                        <div className='description'>
                            Buble Work <span></span>
                        </div>
                        <p className='exp-card-content'>
                        2022
                        </p>
                    </div>

                    <div className='exp-card1' id='card3'>
                        <p className='exp-card-content'>
                            2023
                        </p>
                        <div className='description'>ML Research</div>
                    </div>

                    <div className='exp-card2' id='card4'>
                        <div className='description'>Horus Computer</div>
                        <p className='exp-card-content'>
                        2024
                        </p>
                    </div>
                    </div>

                    <div className='exp-line'>
                        <span className='image-section'>
                            <img src={ universityImage } alt="University" className='image'></img>
                            <img src={ jobsImage } alt="Accenture" className='image'></img>
                            <img src={ jobsImage } alt="Buble" className='image'></img>
                            <img src={ researchImage } alt="Research" className='image'></img>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperiencePage;
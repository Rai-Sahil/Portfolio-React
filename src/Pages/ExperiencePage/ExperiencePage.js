import { useEffect, useState } from 'react';
import Headings from '../../Components/SubHeaders/SubHeader';
import './ExperiencePage.css'
import universityImage from '../../Image/ExperienceSection/University.png'

function ClockLogic() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = date.getHours() * 30 + 180;
    const minute = date.getMinutes() * 6 + 180;

    return { hour, minute }
}

const ExperiencePage = () => {
    const hour = ClockLogic().hour
    const minute = ClockLogic().minute
    
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
                        <div className='description'>Admission into BCIT</div>
                    </div>

                    <div className='exp-card2'>
                        <div className='description'>
                            Accenture Internship <span></span>
                        </div>
                        <p className='exp-card-content'>
                        2022
                        </p>
                    </div>

                    <div className='exp-card1' id='card3'>
                        <p className='exp-card-content'>
                            2022
                        </p>
                        <div className='description'>Buble Work</div>
                    </div>


                    <div className='exp-card2' id='card4'>
                        <div className='description'>Machine Learning Research</div>
                        <p className='exp-card-content'>
                        2023
                        </p>
                    </div>
                    </div>

                    <div className='exp-line'>
                        <span className='image-section'>
                            <img src={ universityImage } className='image'></img>
                            <img src={ universityImage } className='image'></img>
                            <img src={ universityImage } className='image'></img>
                            <img src={ universityImage } className='image'></img>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperiencePage;
import './SkillsPage.css'
import skills from '../../Data/Skill-Data'
import SkillCardsComponent from '../../Components/SkillsCardReusable/SkillCardReusable'
import Headings from '../../Components/SubHeaders/SubHeader'
import { useState } from 'react'


const Skills = () => {

    const [viewAll, setVieAll] = useState(false);
    const [buttonText, setButtonText] = useState('View all')

    const handleViewAllClick = () => {
        setVieAll((value) => !value)
        setButtonText((text) => {
            if (text === 'View all') {
                return 'View less'
            }
            else {
                return 'View all'
            }
        })
    }

    return (
        <div className='skill-section'>
            <Headings context="My" main_word='Skills' />

            <div className='skill-cards-container'>
                <SkillCardsComponent skills={ skills } showAll={ viewAll }/>
            </div>
            <p className='view-more' onClick={ handleViewAllClick }>{ buttonText }</p>
        </div>
    )
}

export default Skills

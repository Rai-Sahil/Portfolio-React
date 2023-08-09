import './SkillsPage.css'
import skills from '../../Data/Skill-Data'
import SkillCardsComponent from '../../Components/SkillsCardReusable/SkillCardReusable'
import Headings from '../../Components/SubHeaders/SubHeader'


const Skills = () => {
    return (
        <div className='skill-section' >
            <Headings context="My" main_word='Skills' />

            <div className='skill-cards-container'>
                <SkillCardsComponent skills={ skills } showAll={ false }/>
            </div>
            <p className='view-more'>View all</p>
        </div>
    )
}

export default Skills

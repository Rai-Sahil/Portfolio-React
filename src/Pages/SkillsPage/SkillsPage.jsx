import './SkillsPage.css'
import skills from '../../Data/Skill-Data'
import SkillCardsComponent from '../../Components/SkillsCardReusable/SkillCardReusable'
import Headings from '../../Components/SubHeaders/SubHeader'
import { useState } from 'react'


const Skills = () => {
    const [viewAll, setViewAll] = useState(false);
    const [buttonText, setButtonText] = useState('View all');

    const handleViewAllClick = () => {
        setViewAll((value) => !value);
        setButtonText((text) => (text === 'View all' ? 'View less' : 'View all'));
    };

    return (
        // JSX
        <div className="skill-section">
            <Headings context="My" main_word="Skills" />

            <div className="skill-cards-wrapper">
                <div className="skill-cards-container">
                    <SkillCardsComponent skills={skills} showAll={viewAll} />
                </div>
            </div>

            <div className="view-more-container">
                <p className="view-more" onClick={handleViewAllClick}>
                    {buttonText}
                </p>
            </div>
        </div>

    );
};

export default Skills;

import './SkillCardReusable.css'

const SkillCardsComponent = ({ skills, showAll }) => {

    let showSkill = showAll ? skills : skills.slice(0, 12)
    return (
        <>
            { showSkill.map(( skill ) => (
                <div key={ skill.name } className='skill-card'>
                    <img src={ skill.image } alt='skill image' className='skill-image' />
                    <p className='card-content' id={ skill.name }>
                        { skill.title }
                    </p>
                </div>
            ))}
        </>
    )
}

export default SkillCardsComponent;
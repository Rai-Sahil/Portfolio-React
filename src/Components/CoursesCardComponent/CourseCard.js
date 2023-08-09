import { useState } from 'react'
import './CourseCard.css'

const plusSign = '＋'
const minusSign = '−'

const CourseList = ({ course }) => {
    return course ? (
        <div className="card-content">
            <ul className="courses-list">
                {course.map((name, index) => (
                    <li className="course-name" key={index}>
                        <span>{name}</span>
                        <button className="credential-button">View credentials</button>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

const CourseCard = ({ Courses }) => {

    const [buttonSigns, setButtonSigns] = useState(Array(Courses.length).fill(plusSign));
    const [showCourses, setShowCourses] = useState(Array(Courses.length).fill(false));

    const handleButtonClick = (index) => {
        setButtonSigns((prevButtonSigns) => {
            const newButtonSigns = [...prevButtonSigns];
            newButtonSigns[index] = newButtonSigns[index] === plusSign ? '−' : plusSign;
            return newButtonSigns;
        });

        setShowCourses((prevShowCourses) => {
            const newShowCourses = [...prevShowCourses];
            newShowCourses[index] = !prevShowCourses[index];
            return newShowCourses;
        });
    };

    return (
        <>
            {Courses.map((Course, index) => (
                <div className="course-type-boxes" key={index}>
                    <div className="heading-area">
                        <span className="course-type-name">
                            <b>{ Course.number } </b>
                            {Course.courseType}
                        </span>
                        <button
                            className={buttonSigns[index] === plusSign ? 'plus' : 'minus'}
                            onClick={() => handleButtonClick(index)}
                        >
                            {buttonSigns[index]}
                        </button>
                    </div>
                    {showCourses[index] && <CourseList course={Course.course} />}
                </div>
            ))}
        </>
    );
};

export default CourseCard;
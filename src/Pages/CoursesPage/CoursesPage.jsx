import Headings from "../../Components/SubHeaders/SubHeader";
import './CoursesPage.css'
import CourseCard from "../../Components/CoursesCardComponent/CourseCard";
import CoursesData from "../../Data/Course-Data";

const Courses = () => {

    return (
        <div className="course-section">
            <Headings context='Enroll in my' main_word='Educational Background' />

            <CourseCard Courses={ CoursesData } />
        </div>
    )
}

export default Courses;
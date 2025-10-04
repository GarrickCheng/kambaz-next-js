import { Link, useParams } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen, faComments, faVideo, faTasks, faClipboardList, faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function CoursesNavigation() {
  const { cid } = useParams();  

  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link" to={`/Kanbas/Courses/${cid}/Home`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faHome} className="wd-nav-icon" /> Home
      </Link><br/>

      <Link id="wd-course-modules-link" to={`/Kanbas/Courses/${cid}/Modules`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faBookOpen} className="wd-nav-icon" /> Modules
      </Link><br/>

      <Link id="wd-course-piazza-link" to={`/Kanbas/Courses/${cid}/Piazza`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faComments} className="wd-nav-icon" /> Piazza
      </Link><br/>

      <Link id="wd-course-zoom-link" to={`/Kanbas/Courses/${cid}/Zoom`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faVideo} className="wd-nav-icon" /> Zoom
      </Link><br/>

      <Link id="wd-course-assignments-link" to={`/Kanbas/Courses/${cid}/Assignments`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faTasks} className="wd-nav-icon" /> Assignments
      </Link><br/>

      <Link id="wd-course-quizzes-link" to={`/Kanbas/Courses/${cid}/Quizzes`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faClipboardList} className="wd-nav-icon" /> Quizzes
      </Link><br/>

      <Link id="wd-course-grades-link" to={`/Kanbas/Courses/${cid}/Grades`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faChartBar} className="wd-nav-icon" /> Grades
      </Link><br/>

      <Link id="wd-course-people-link" to={`/Kanbas/Courses/${cid}/People`} className="text-danger text-decoration-none">
        <FontAwesomeIcon icon={faUsers} className="wd-nav-icon" /> People
      </Link><br/>
    </div>
  );
}

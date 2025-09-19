import Link from "next/link";

export default function CourseNavigation({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${params.cid}/Home`}>Home</Link><br/>
      <Link href={`/Courses/${params.cid}/Modules`}>Modules
        </Link><br/>
      <Link href={`/Courses/${params.cid}/Piazza`}>Piazza</Link><br/>
      <Link href={`/Courses/${params.cid}/Zoom`}>Zoom</Link><br/>
      <Link href={`/Courses/${params.cid}/Assignments`}>
          Assignments</Link><br/>
      <Link href={`/Courses/${params.cid}/Quizzes`}>Quizzes
        </Link><br/>
      <Link href={`/Courses/${params.cid}/Grades`}>Grades</Link><br/>
      <Link href={`/Courses/${params.cid}/People`}>People</Link><br/>
    </div>
  );}

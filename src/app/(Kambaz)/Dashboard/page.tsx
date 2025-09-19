import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1200" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="ENVR1200 React JS Course" />
            <div>
              <h5> ENVR1200 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4700" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS4700 React JS Course" />
            <div>
              <h5> CS4700 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS4550 React JS Course" />
            <div>
              <h5> CS4550 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3800" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS3800 React JS Course" />
            <div>
              <h5> CS3800 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS3200 React JS Course" />
            <div>
              <h5> CS3200 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3520" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS3520 React JS Course" />
            <div>
              <h5> CS3520 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3650" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="CS3650 React JS Course" />
            <div>
              <h5> CS3650 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

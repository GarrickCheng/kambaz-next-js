export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href={`/Courses/${cid}/Assignments/123`}
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>
          <p>Multiple Modules | <strong>Not Available until</strong> Monday May 6 at 12:00 am |</p>
          <p><strong>Due</strong> May 13 at 11:59 pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a href={`/Courses/${cid}/Assignments/124`}
             className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
          <p>Multiple Modules | <strong>Not Available until</strong> Monday May 13 at 12:00 am |</p>
          <p><strong>Due</strong> May 20 at 11:59 pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a href={`/Courses/${cid}/Assignments/125`}
             className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a>
          <p>Multiple Modules | <strong>Not Available until</strong> Monday May 20 at 12:00 am |</p>
          <p><strong>Due</strong> May 27 at 11:59 pm | 100 pts</p>
        </li>
      </ul>
        
        <h3 id="wd-exams-title">
          EXAMS 20% of Total <button>+</button>
        </h3>
        
        <h3 id="wd-quizzes-title">
          QUIZZES 10% of Total <button>+</button>
        </h3>
        
        <h3 id="wd-projects-title">
          PROJECTS 30% of Total <button>+</button>
        </h3>
      </div>
  );}
  
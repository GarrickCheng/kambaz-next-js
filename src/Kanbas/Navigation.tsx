import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser , FaFlask} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";  

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  
  const links = [
    { label: "Account", path: "/Kanbas/Account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a id="wd-neu-link" target="" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>
      <br />

      {links.map((link) => {
        const isActive = pathname.startsWith(link.path);
        const Icon = link.icon;
        return (
          <div key={link.path}>
            <Link 
              to={link.path} 
              className={`list-group-item text-center border-0 ${
                isActive ? "bg-white text-danger" : "bg-black text-white"
              }`}>
              <Icon className={`fs-1 ${isActive ? "text-danger" : "text-danger"}`} />
              <br />{link.label}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}

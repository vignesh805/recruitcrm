import  { useState } from 'react';
import './Dash.css';
import { MdMailOutline } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { BiBuildings } from "react-icons/bi";
import { MdOutlineContactMail } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link, Outlet } from 'react-router-dom';

function Dash() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <nav className='navbar'>
          <div className="hover-container">
  
              <span className={`sidebar-icon ${activeIcon === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleIconClick('dashboard')}>
                <RiDashboardLine size={20}/> 
                <span className="hover-text">Dashboard</span>
              </span>
         
          </div>
          
          <div className="hover-container">
            <Link to="table">
              <span
                className={`sidebar-icon ${activeIcon === 'profile' ? 'active' : ''}`}
                onClick={() => handleIconClick('profile')}
              >
                <GrUserManager size={20}/>
                <span className="hover-text">Candidates</span>
              </span>
            </Link>
          </div>

          <div className="hover-container">
            <Link to="company">
            <span
              className={`sidebar-icon ${activeIcon === 'companies' ? 'active' : ''}`}
              onClick={() => handleIconClick('companies')}
            >
              <BiBuildings size={25} />
              <span className="hover-text">Companies</span>
            </span>
           </Link>
          </div>

          <div className="hover-container">
            <Link to="contact">
            <span
              className={`sidebar-icon ${activeIcon === 'contact' ? 'active' : ''}`}
              onClick={() => handleIconClick('contact')}
            >
              <MdOutlineContactMail size={25} />
              <span className="hover-text">Contacts</span>
            </span>
</Link>
          </div>

          <div className="hover-container">
            <span
              className={`sidebar-icon ${activeIcon === 'jobs' ? 'active' : ''}`}
              onClick={() => handleIconClick('jobs')}
            >
              <PiSuitcaseSimple size={20}/>
              <span className="hover-text">Jobs</span>
            </span>
          </div>

          <div className="hover-container">
            <span
              className={`sidebar-icon ${activeIcon === 'mail' ? 'active' : ''}`}
              onClick={() => handleIconClick('mail')}
            >
              <MdMailOutline size={20} />
              <span className="hover-text">Mailbox</span>
            </span>
          </div>
        </nav>
      </div>

      {/* Main content area where Outlet renders nested routes */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dash;

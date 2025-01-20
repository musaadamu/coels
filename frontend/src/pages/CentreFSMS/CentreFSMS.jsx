import React from 'react';
import './CentreFSMS.css';

// const CentreFSMS = () => {
//     return (
//         <div className="centre-container">
//             {/* Sidebar */}
//             <div className="sidebar">
//                 <div className="sidebar-image">
//                     <img src="images/image23.jpg" alt="Centre Location" />
//                 </div>
//                 <div className="sidebar-links">
//                     <h3>Departments</h3>
//                     <ul>
//                         <li><a href="/public-admin">Public Administration & Accounting</a></li>
//                         <li><a href="/quranic-science">Qur'anic Science</a></li>
//                         <li><a href="/community-dev">Community & Social Development</a></li>
//                         <li><a href="/peace-studies">Peace & Conflict Studies</a></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Main Content */} 
//             <div className="main-content">
//                 <div className="main-image">
//                     <img src="images/image25.jpg" alt="Centre for Social and Management Sciences" />
//                 </div>
//                 <div className="main-text">
//                     <h1>Centre for Social and Management Sciences</h1>
//                     <p>
//                         The Centre for Social and Management Sciences is dedicated to the pursuit of knowledge 
//                         and development in key areas of public service, community development, and conflict resolution.
//                         Our goal is to provide cutting-edge education and research to foster sustainable growth and progress.
//                     </p>
//                     <h2>Departments</h2>
//                     <ul>
//                         <li>Department of Public Administration and Accounting</li>
//                         <li>Department of Qur'anic Science</li>
//                         <li>Department of Community and Social Development</li>
//                         <li>Department of Peace and Conflict Studies</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CentreFSMS;


import { Link } from 'react-router-dom';
import './CentreFSMS.css';

const CentreFSMS = () => {
  return (
    <div className="page-container">
      <div className="centre-layout">
        <div className="sidebar">
          <div className="sidebar-image">
            <img src="images/image23.jpg" alt="Centre Image" />
          </div>
          <div className="departments">
            <h3>Departments</h3>
            <ul>
              <li><Link to="/department-computer-science">Computer Science</Link></li>
              <li><Link to="/business-education">Business Administration</Link></li>
              <li><Link to="/public-admin">Public Administration</Link></li>
              <li><Link to="/accounting-audits">Accounting and Audits</Link></li>
              <li><Link to="/quranic-science">Qur'anic Science</Link></li>
              <li><Link to="/community-social-development">Community and Social Development</Link></li>
              <li><Link to="/peaceconflictresolution">Peace and Conflict Studies</Link></li>
              <li><Link to="/library-information-science">Library and Information Science</Link></li>
              <li><Link to="/sharia-civil-law">Shariah and Civil Law</Link></li>
              <li><Link to="/civil-law">Civil Law</Link></li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <div className="main-image">
            <img src="images/image27.jpg" alt="Centre Image" />
          </div>
          <div className="text-content">
            <h1>Centre for Social and Management Sciences</h1>
            <p>
              Welcome to the Centre for Social and Management Sciences. This centre is dedicated to fostering 
              academic excellence in various fields related to social sciences, administration, and law. Below are the key departments housed within this centre:
            </p>
            <ul>
              <li>Department of Computer Science</li>
              <li>Department of Business Administration</li>
              <li>Department of Public Administration</li>
              <li>Department of Accounting and Audits</li>
              <li>Department of Qur'anic Science</li>
              <li>Department of Community and Social Development</li>
              <li>Department of Peace and Conflict Studies</li>
              <li>Department of Library and Information Science</li>
              <li>Department of Shariah and Civil Law</li>
              <li>Department of Civil Law</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreFSMS;

// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css'; // Import custom CSS for styles

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <header>
//       <div className="bg-dark py-3">
//         <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
//           <div className="logo-container">
//             <img
//               src="images/logo.JPG"
//               alt="The College Logo"
//               className="logo" // Use CSS class for logo styling
//             />
//           </div>
//           <div className="d-flex flex-wrap justify-content-center gap-3 w-100 mt-2 mt-md-0">
//             <Link className="nav-link text-light" to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
//             <Link className="nav-link text-light" to="/provost" style={{ fontSize: '1.3rem' }}>Provost</Link>
//             <Link className="nav-link text-light" to="/registrar" style={{ fontSize: '1.3rem' }}>Registrar</Link>
//             <Link className="nav-link text-light" to="/librarian" style={{ fontSize: '1.3rem' }}>Librarian</Link>
//             <Link className="nav-link text-light" to="/tetfund" style={{ fontSize: '1.3rem' }}>TETFUND</Link>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Registrar's Office
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/exams-records">Exams and Records</Link></li>
//                 <li><Link className="dropdown-item" to="/establishment-office">Establishment</Link></li>
//                 <li><Link className="dropdown-item" to="/admission-office">Admissions</Link></li>
//                 <li><Link className="dropdown-item" to="/student-affairs">Student Affairs</Link></li>
//                 <li><Link className="dropdown-item" to="/open-registry">Open Registry</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Schools
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/dean-school-of-science">The Dean School of Science</Link></li>
//                 <li><Link className="dropdown-item" to="/dean-school-of-languages">The Dean School of Languages</Link></li>
//                 <li><Link className="dropdown-item" to="/dean-school-of-law">The Dean School of Law</Link></li>
//                 <li><Link className="dropdown-item" to="/education">The Dean School of Education</Link></li>
//                 <li><Link className="dropdown-item" to="/early-child">The Dean School of Early Child Care Education</Link></li>
//                 <li><Link className="dropdown-item" to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
//                 <li><Link className="dropdown-item" to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
//                 <li><Link className="dropdown-item" to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
//                 <li><Link className="dropdown-item" to="/general-studies">The Dean General Studies</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Our Portals
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/staff">Staff</Link></li>
//                 <li><Link className="dropdown-item" to="/students">Students</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Departments
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/department-computer-science">Department of Computer Science</Link></li>
//                 <li><Link className="dropdown-item" to="/department-mathematics">Departments of Mathematics</Link></li>
//                 <li><Link className="dropdown-item" to="/department-english">Department of English</Link></li>
//                 <li><Link className="dropdown-item" to="/department-hausa">Department of Hausa</Link></li>
//                 <li><Link className="dropdown-item" to="/integrated-science">Department of Integrated Science</Link></li>
//                 <li><Link className="dropdown-item" to="/arabic">Department of Arabic</Link></li>
//                 <li><Link className="dropdown-item" to="/islamic-studies">Department of Islamic Studies</Link></li>
//                 <li><Link className="dropdown-item" to="/economics">Department of Economics</Link></li>
//                 <li><Link className="dropdown-item" to="/social-studies">Department of Social Studies</Link></li>
//                 <li><Link className="dropdown-item" to="/civil-law">Department of Civil Law</Link></li>
//                 <li><Link className="dropdown-item" to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
//                 <li><Link className="dropdown-item" to="/home-management">Department of Home Management</Link></li>
//                 <li><Link className="dropdown-item" to="/department-education">Department of Education</Link></li>
//                 <li><Link className="dropdown-item" to="/primary-education">Department of Primary Education</Link></li>
//                 <li><Link className="dropdown-item" to="/business-education">Department of Business Education</Link></li>
//                 <li><Link className="dropdown-item" to="/public-admin">Department of Public Admin</Link></li>
//                 <li><Link className="dropdown-item" to="/quranic-science">Department of Qur'anic Science</Link></li>
//                 <li><Link className="dropdown-item" to="/community-social-development">Department of Community and Social Development</Link></li>
//                 <li><Link className="dropdown-item" to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
//                 <li><Link className="dropdown-item" to="/library-information-science">Department of Library and Information Science</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Programmes
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/diploma">Diploma</Link></li>
//                 <li><Link className="dropdown-item" to="/nce">NCE</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Students
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
//                 <li><Link className="dropdown-item" to="/payment">Payments</Link></li>
//                 <li><Link className="dropdown-item" to="/accommodation">Accommodations</Link></li>
//                 <li><Link className="dropdown-item" to="/results">Results</Link></li>
//               </ul>
//             </div>
//           </div>

//           <div className="d-flex gap-3">
//             {userInfo ? (
//               <div className="dropdown">
//                 <button
//                   className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {userInfo.name}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/profile">Profile</Link>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <>
//                 <Link className="nav-link text-light" to="/login">
//                   <FaSignInAlt /> Sign In
//                 </Link>
//                 <Link className="nav-link text-light" to="/register">
//                   <FaSignOutAlt /> Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css';

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'active-nav-link' : '';
//   };

//   return (
//     <header>
//       <div className="bg-dark py-3">
//         <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
//           <div className="logo-container">
//             <img
//               src="images/logo.JPG"
//               alt="The College Logo"
//               className="logo"
//             />
//           </div>
//           <div className="d-flex flex-wrap justify-content-center gap-3 w-100 mt-2 mt-md-0">
//             <Link className={`nav-link text-light ${isActive('/')}`} to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
//             <Link className={`nav-link text-light ${isActive('/provost')}`} to="/provost" style={{ fontSize: '1.3rem' }}>Provost</Link>
//             <Link className={`nav-link text-light ${isActive('/registrar')}`} to="/registrar" style={{ fontSize: '1.3rem' }}>Registrar</Link>
//             <Link className={`nav-link text-light ${isActive('/librarian')}`} to="/librarian" style={{ fontSize: '1.3rem' }}>Librarian</Link>
//             <Link className={`nav-link text-light ${isActive('/tetfund')}`} to="/tetfund" style={{ fontSize: '1.3rem' }}>TETFUND</Link>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registrar') ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Registrar's Office
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/exams-records')}`} to="/exams-records">Exams and Records</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/establishment-office')}`} to="/establishment-office">Establishment</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/admission-office')}`} to="/admission-office">Admissions</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/student-affairs')}`} to="/student-affairs">Student Affairs</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/open-registry')}`} to="/open-registry">Open Registry</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/dean-') || location.pathname.includes('/school-') ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Schools
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/dean-school-of-science')}`} to="/dean-school-of-science">The Dean School of Science</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/dean-school-of-languages')}`} to="/dean-school-of-languages">The Dean School of Languages</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/dean-school-of-law')}`} to="/dean-school-of-law">The Dean School of Law</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/education')}`} to="/education">The Dean School of Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/early-child')}`} to="/early-child">The Dean School of Early Child Care Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/school-of-arts')}`} to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/school-of-vocational')}`} to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/centre-for-social-and-management-science')}`} to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/general-studies')}`} to="/general-studies">The Dean General Studies</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/staff' || location.pathname === '/students' ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Our Portals
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/staff')}`} to="/staff">Staff</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/students')}`} to="/students">Students</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('department-') ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Departments
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/department-computer-science')}`} to="/department-computer-science">Department of Computer Science</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/department-mathematics')}`} to="/department-mathematics">Departments of Mathematics</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/department-english')}`} to="/department-english">Department of English</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/department-hausa')}`} to="/department-hausa">Department of Hausa</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/integrated-science')}`} to="/integrated-science">Department of Integrated Science</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/arabic')}`} to="/arabic">Department of Arabic</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/islamic-studies')}`} to="/islamic-studies">Department of Islamic Studies</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/economics')}`} to="/economics">Department of Economics</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/social-studies')}`} to="/social-studies">Department of Social Studies</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/civil-law')}`} to="/civil-law">Department of Civil Law</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/sharia-civil-law')}`} to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/home-management')}`} to="/home-management">Department of Home Management</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/department-education')}`} to="/department-education">Department of Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/primary-education')}`} to="/primary-education">Department of Primary Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/business-education')}`} to="/business-education">Department of Business Education</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/public-admin')}`} to="/public-admin">Department of Public Admin</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/quranic-science')}`} to="/quranic-science">Department of Qur'anic Science</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/community-social-development')}`} to="/community-social-development">Department of Community and Social Development</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/peace-conflict-resolution')}`} to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/library-information-science')}`} to="/library-information-science">Department of Library and Information Science</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/diploma' || location.pathname === '/nce' ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Programmes
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/diploma')}`} to="/diploma">Diploma</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/nce')}`} to="/nce">NCE</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registration') || location.pathname.includes('/payment') || location.pathname.includes('/accommodation') || location.pathname.includes('/results') ? 'active-nav-link' : ''}`}
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Students
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className={`dropdown-item ${isActive('/registration')}`} to="/registration">Registration</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/payment')}`} to="/payment">Payments</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/accommodation')}`} to="/accommodation">Accommodations</Link></li>
//                 <li><Link className={`dropdown-item ${isActive('/results')}`} to="/results">Results</Link></li>
//               </ul>
//             </div>
//           </div>

//           <div className="d-flex gap-3">
//             {userInfo ? (
//               <div className="dropdown">
//                 <button
//                   className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {userInfo.name}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className={`dropdown-item ${isActive('/profile')}`} to="/profile">Profile</Link>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <>
//                 <Link className={`nav-link text-light ${isActive('/login')}`} to="/login">
//                   <FaSignInAlt /> Sign In
//                 </Link>
//                 <Link className={`nav-link text-light ${isActive('/register')}`} to="/register">
//                   <FaSignOutAlt /> Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css';

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'active-nav-link' : '';
//   };

//   return (
//     <header className="bg-dark">
//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <div className="container-fluid">
//           <div className="logo-container">
//             <img src="images/logo.JPG" alt="The College Logo" className="logo" />
//           </div>
          
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent" 
//             aria-expanded="false" 
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarContent">
//             <div className="nav-container">
//               <Link className={`nav-link text-light ${isActive('/')}`} to="/">Home</Link>
//               <Link className={`nav-link text-light ${isActive('/provost')}`} to="/provost">Provost</Link>
//               <Link className={`nav-link text-light ${isActive('/registrar')}`} to="/registrar">Registrar</Link>
//               <Link className={`nav-link text-light ${isActive('/librarian')}`} to="/librarian">Librarian</Link>
//               <Link className={`nav-link text-light ${isActive('/tetfund')}`} to="/tetfund">TETFUND</Link>

//               {/* Your existing dropdown menus */}
//               <div className="nav-item dropdown">
//                 <button
//                   className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registrar') ? 'active-nav-link' : ''}`}
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Registrar's Office
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li><Link className={`dropdown-item ${isActive('/exams-records')}`} to="/exams-records">Exams and Records</Link></li>
//                   <li><Link className={`dropdown-item ${isActive('/establishment-office')}`} to="/establishment-office">Establishment</Link></li>
//                   <li><Link className={`dropdown-item ${isActive('/admission-office')}`} to="/admission-office">Admissions</Link></li>
//                   <li><Link className={`dropdown-item ${isActive('/student-affairs')}`} to="/student-affairs">Student Affairs</Link></li>
//                   <li><Link className={`dropdown-item ${isActive('/open-registry')}`} to="/open-registry">Open Registry</Link></li>
//                 </ul>
//               </div>

//               {/* Continue with other dropdowns... */}
//               {/* Keep all your existing dropdowns, just wrap them in nav-item dropdown class */}
//             </div>

//             <div className="auth-links ms-auto">
//               {userInfo ? (
//                 <div className="nav-item dropdown">
//                   <button
//                     className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     {userInfo.name}
//                   </button>
//                   <ul className="dropdown-menu dropdown-menu-end">
//                     <li>
//                       <Link className={`dropdown-item ${isActive('/profile')}`} to="/profile">Profile</Link>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                     </li>
//                   </ul>
//                 </div>
//               ) : (
//                 <div className="d-flex gap-3">
//                   <Link className={`nav-link text-light ${isActive('/login')}`} to="/login">
//                     <FaSignInAlt /> Sign In
//                   </Link>
//                   <Link className={`nav-link text-light ${isActive('/register')}`} to="/register">
//                     <FaSignOutAlt /> Sign Up
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css';

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'active-nav-link' : '';
//   };

//   return (
//     <header>
//       <div className="bg-dark py-3">
//         <div className="container-fluid">
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="logo-container">
//               <img
//                 src="images/logo.JPG"
//                 alt="The College Logo"
//                 className="logo"
//               />
//             </div>
            
//             <div className="nav-container overflow-auto flex-grow-1 mx-4" style={{ whiteSpace: 'nowrap' }}>
//               <div className="d-flex align-items-center gap-3">
//                 <Link className={`nav-link text-light ${isActive('/')}`} to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
//                 <Link className={`nav-link text-light ${isActive('/provost')}`} to="/provost" style={{ fontSize: '1.3rem' }}>Provost</Link>
//                 <Link className={`nav-link text-light ${isActive('/registrar')}`} to="/registrar" style={{ fontSize: '1.3rem' }}>Registrar</Link>
//                 <Link className={`nav-link text-light ${isActive('/librarian')}`} to="/librarian" style={{ fontSize: '1.3rem' }}>Librarian</Link>
//                 <Link className={`nav-link text-light ${isActive('/tetfund')}`} to="/tetfund" style={{ fontSize: '1.3rem' }}>TETFUND</Link>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registrar') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Registrar's Office
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/exams-records')}`} to="/exams-records">Exams and Records</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/establishment-office')}`} to="/establishment-office">Establishment</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/admission-office')}`} to="/admission-office">Admissions</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/student-affairs')}`} to="/student-affairs">Student Affairs</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/open-registry')}`} to="/open-registry">Open Registry</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/dean-') || location.pathname.includes('/school-') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Schools
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-science')}`} to="/dean-school-of-science">The Dean School of Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-languages')}`} to="/dean-school-of-languages">The Dean School of Languages</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-law')}`} to="/dean-school-of-law">The Dean School of Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/education')}`} to="/education">The Dean School of Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/early-child')}`} to="/early-child">The Dean School of Early Child Care Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/school-of-arts')}`} to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/school-of-vocational')}`} to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/centre-for-social-and-management-science')}`} to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/general-studies')}`} to="/general-studies">The Dean General Studies</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/staff' || location.pathname === '/students' ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Our Portals
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/staff')}`} to="/staff">Staff</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/students')}`} to="/students">Students</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('department-') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Departments
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/department-computer-science')}`} to="/department-computer-science">Department of Computer Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-mathematics')}`} to="/department-mathematics">Departments of Mathematics</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-english')}`} to="/department-english">Department of English</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-hausa')}`} to="/department-hausa">Department of Hausa</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/integrated-science')}`} to="/integrated-science">Department of Integrated Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/arabic')}`} to="/arabic">Department of Arabic</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/islamic-studies')}`} to="/islamic-studies">Department of Islamic Studies</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/economics')}`} to="/economics">Department of Economics</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/social-studies')}`} to="/social-studies">Department of Social Studies</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/civil-law')}`} to="/civil-law">Department of Civil Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/sharia-civil-law')}`} to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/home-management')}`} to="/home-management">Department of Home Management</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-education')}`} to="/department-education">Department of Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/primary-education')}`} to="/primary-education">Department of Primary Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/business-education')}`} to="/business-education">Department of Business Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/public-admin')}`} to="/public-admin">Department of Public Admin</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/quranic-science')}`} to="/quranic-science">Department of Qur'anic Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/community-social-development')}`} to="/community-social-development">Department of Community and Social Development</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/peace-conflict-resolution')}`} to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/library-information-science')}`} to="/library-information-science">Department of Library and Information Science</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/diploma' || location.pathname === '/nce' ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Programmes
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/diploma')}`} to="/diploma">Diploma</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/nce')}`} to="/nce">NCE</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registration') || location.pathname.includes('/payment') || location.pathname.includes('/accommodation') || location.pathname.includes('/results') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Students
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/registration')}`} to="/registration">Registration</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/payment')}`} to="/payment">Payments</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/accommodation')}`} to="/accommodation">Accommodations</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/results')}`} to="/results">Results</Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="d-flex gap-3">
//               {userInfo ? (
//                 <div className="dropdown">
//                   <button
//                     className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     {userInfo.name}
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <Link className={`dropdown-item ${isActive('/profile')}`} to="/profile">Profile</Link>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                     </li>
//                   </ul>
//                 </div>
//               ) : (
//                 <>
//                   <Link className={`nav-link text-light ${isActive('/login')}`} to="/login">
//                     <FaSignInAlt /> Sign In
//                   </Link>
//                   <Link className={`nav-link text-light ${isActive('/register')}`} to="/register">
//                     <FaSignOutAlt /> Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css';

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'active-nav-link' : '';
//   };

//   return (
//     <header>
//       <div className="bg-dark py-3">
//         <div className="container-fluid">
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="logo-container">
//               <img
//                 src="images/logo.JPG"
//                 alt="The College Logo"
//                 className="logo"
//               />
//             </div>

//             <div className="nav-container overflow-auto flex-grow-1 mx-4" style={{ whiteSpace: 'nowrap' }}>
//               <div className="d-flex align-items-center gap-3">
//                 <Link className={`nav-link text-light ${isActive('/')}`} to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
//                 <Link className={`nav-link text-light ${isActive('/provost')}`} to="/provost" style={{ fontSize: '1.3rem' }}>Provost</Link>
//                 <Link className={`nav-link text-light ${isActive('/registrar')}`} to="/registrar" style={{ fontSize: '1.3rem' }}>Registrar</Link>
//                 <Link className={`nav-link text-light ${isActive('/librarian')}`} to="/librarian" style={{ fontSize: '1.3rem' }}>Librarian</Link>
//                 <Link className={`nav-link text-light ${isActive('/tetfund')}`} to="/tetfund" style={{ fontSize: '1.3rem' }}>TETFUND</Link>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registrar') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Registrar's Office
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/exams-records')}`} to="/exams-records">Exams and Records</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/establishment-office')}`} to="/establishment-office">Establishment</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/admission-office')}`} to="/admission-office">Admissions</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/student-affairs')}`} to="/student-affairs">Student Affairs</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/open-registry')}`} to="/open-registry">Open Registry</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/dean-') || location.pathname.includes('/school-') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Schools
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-science')}`} to="/dean-school-of-science">The Dean School of Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-languages')}`} to="/dean-school-of-languages">The Dean School of Languages</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/dean-school-of-law')}`} to="/dean-school-of-law">The Dean School of Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/education')}`} to="/education">The Dean School of Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/early-child')}`} to="/early-child">The Dean School of Early Child Care Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/school-of-arts')}`} to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/school-of-vocational')}`} to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/centre-for-social-and-management-science')}`} to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/general-studies')}`} to="/general-studies">The Dean General Studies</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/staff' || location.pathname === '/students' ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Our Portals
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/staff')}`} to="/staff">Staff</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/students')}`} to="/students">Students</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('department-') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Departments
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/department-computer-science')}`} to="/department-computer-science">Department of Computer Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-mathematics')}`} to="/department-mathematics">Departments of Mathematics</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-english')}`} to="/department-english">Department of English</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-hausa')}`} to="/department-hausa">Department of Hausa</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/integrated-science')}`} to="/integrated-science">Department of Integrated Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/arabic')}`} to="/arabic">Department of Arabic</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/islamic-studies')}`} to="/islamic-studies">Department of Islamic Studies</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/economics')}`} to="/economics">Department of Economics</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/social-studies')}`} to="/social-studies">Department of Social Studies</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/civil-law')}`} to="/civil-law">Department of Civil Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/sharia-civil-law')}`} to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/home-management')}`} to="/home-management">Department of Home Management</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/department-education')}`} to="/department-education">Department of Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/primary-education')}`} to="/primary-education">Department of Primary Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/business-education')}`} to="/business-education">Department of Business Education</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/public-admin')}`} to="/public-admin">Department of Public Admin</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/quranic-science')}`} to="/quranic-science">Department of Qur'anic Science</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/community-social-development')}`} to="/community-social-development">Department of Community and Social Development</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/peace-conflict-resolution')}`} to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/library-information-science')}`} to="/library-information-science">Department of Library and Information Science</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname === '/diploma' || location.pathname === '/nce' ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Programmes
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/diploma')}`} to="/diploma">Diploma</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/nce')}`} to="/nce">NCE</Link></li>
//                   </ul>
//                 </div>

//                 <div className="dropdown">
//                   <button
//                     className={`dropdown-toggle nav-link text-light border-0 bg-transparent ${location.pathname.includes('/registration') || location.pathname.includes('/payment') || location.pathname.includes('/accommodation') || location.pathname.includes('/results') ? 'active-nav-link' : ''}`}
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{ fontSize: '1.3rem' }}
//                   >
//                     Students
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link className={`dropdown-item ${isActive('/registration')}`} to="/registration">Registration</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/payment')}`} to="/payment">Payments</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/accommodation')}`} to="/accommodation">Accommodations</Link></li>
//                     <li><Link className={`dropdown-item ${isActive('/results')}`} to="/results">Results</Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="d-flex gap-3">
//               {userInfo ? (
//                 <div className="dropdown">
//                   <button
//                     className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     {userInfo.name}
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <Link className={`dropdown-item ${isActive('/profile')}`} to="/profile">Profile</Link>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                     </li>
//                   </ul>
//                 </div>
//               ) : (
//                 <>
//                   <Link className={`nav-link text-light ${isActive('/login')}`} to="/login">
//                     <FaSignInAlt /> Sign In
//                   </Link>
//                   <Link className={`nav-link text-light ${isActive('/register')}`} to="/register">
//                     <FaSignOutAlt /> Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link, NavLink } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Header.css'; // Import custom CSS for styles

// const Header = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <header>
//       <div className="bg-dark py-3">
//         <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
//           <div className="logo-container">
//             <img
//               src="images/logo.JPG"
//               alt="The College Logo"
//               className="logo" // Use CSS class for logo styling
//             />
//           </div>
//           <div className="d-flex flex-wrap justify-content-center gap-3 w-100 mt-2 mt-md-0">
//             <NavLink className="nav-link text-light" to="/" activeClassName="active" style={{ fontSize: '1.3rem' }}>Home</NavLink>
//             <NavLink className="nav-link text-light" to="/provost" activeClassName="active" style={{ fontSize: '1.3rem' }}>Provost</NavLink>
//             <NavLink className="nav-link text-light" to="/registrar" activeClassName="active" style={{ fontSize: '1.3rem' }}>Registrar</NavLink>
//             <NavLink className="nav-link text-light" to="/librarian" activeClassName="active" style={{ fontSize: '1.3rem' }}>Librarian</NavLink>
//             <NavLink className="nav-link text-light" to="/tetfund" activeClassName="active" style={{ fontSize: '1.3rem' }}>TETFUND</NavLink>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Registrar's Office
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/exams-records">Exams and Records</Link></li>
//                 <li><Link className="dropdown-item" to="/establishment-office">Establishment</Link></li>
//                 <li><Link className="dropdown-item" to="/admission-office">Admissions</Link></li>
//                 <li><Link className="dropdown-item" to="/student-affairs">Student Affairs</Link></li>
//                 <li><Link className="dropdown-item" to="/open-registry">Open Registry</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Schools
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/dean-school-of-science">The Dean School of Science</Link></li>
//                 <li><Link className="dropdown-item" to="/dean-school-of-languages">The Dean School of Languages</Link></li>
//                 <li><Link className="dropdown-item" to="/dean-school-of-law">The Dean School of Law</Link></li>
//                 <li><Link className="dropdown-item" to="/education">The Dean School of Education</Link></li>
//                 <li><Link className="dropdown-item" to="/early-child">The Dean School of Early Child Care Education</Link></li>
//                 <li><Link className="dropdown-item" to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
//                 <li><Link className="dropdown-item" to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
//                 <li><Link className="dropdown-item" to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
//                 <li><Link className="dropdown-item" to="/general-studies">The Dean General Studies</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Our Portals
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/staff">Staff</Link></li>
//                 <li><Link className="dropdown-item" to="/students">Students</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Departments
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/department-computer-science">Department of Computer Science</Link></li>
//                 <li><Link className="dropdown-item" to="/department-mathematics">Departments of Mathematics</Link></li>
//                 <li><Link className="dropdown-item" to="/department-english">Department of English</Link></li>
//                 <li><Link className="dropdown-item" to="/department-hausa">Department of Hausa</Link></li>
//                 <li><Link className="dropdown-item" to="/integrated-science">Department of Integrated Science</Link></li>
//                 <li><Link className="dropdown-item" to="/arabic">Department of Arabic</Link></li>
//                 <li><Link className="dropdown-item" to="/islamic-studies">Department of Islamic Studies</Link></li>
//                 <li><Link className="dropdown-item" to="/economics">Department of Economics</Link></li>
//                 <li><Link className="dropdown-item" to="/social-studies">Department of Social Studies</Link></li>
//                 <li><Link className="dropdown-item" to="/civil-law">Department of Civil Law</Link></li>
//                 <li><Link className="dropdown-item" to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
//                 <li><Link className="dropdown-item" to="/home-management">Department of Home Management</Link></li>
//                 <li><Link className="dropdown-item" to="/department-education">Department of Education</Link></li>
//                 <li><Link className="dropdown-item" to="/primary-education">Department of Primary Education</Link></li>
//                 <li><Link className="dropdown-item" to="/business-education">Department of Business Education</Link></li>
//                 <li><Link className="dropdown-item" to="/public-admin">Department of Public Admin</Link></li>
//                 <li><Link className="dropdown-item" to="/quranic-science">Department of Qur'anic Science</Link></li>
//                 <li><Link className="dropdown-item" to="/community-social-development">Department of Community and Social Development</Link></li>
//                 <li><Link className="dropdown-item" to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
//                 <li><Link className="dropdown-item" to="/library-information-science">Department of Library and Information Science</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Programmes
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/diploma">Diploma</Link></li>
//                 <li><Link className="dropdown-item" to="/nce">NCE</Link></li>
//               </ul>
//             </div>

//             <div className="dropdown">
//               <button
//                 className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: '1.3rem' }}
//               >
//                 Students
//               </button>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
//                 <li><Link className="dropdown-item" to="/payment">Payments</Link></li>
//                 <li><Link className="dropdown-item" to="/accommodation">Accommodations</Link></li>
//                 <li><Link className="dropdown-item" to="/results">Results</Link></li>
//               </ul>
//             </div>
//           </div>

//           <div className="d-flex gap-3">
//             {userInfo ? (
//               <div className="dropdown">
//                 <button
//                   className="dropdown-toggle nav-link text-light border-0 bg-transparent"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {userInfo.name}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/profile">Profile</Link>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <>
//                 <Link className="nav-link text-light" to="/login">
//                   <FaSignInAlt /> Sign In
//                 </Link>
//                 <Link className="nav-link text-light" to="/register">
//                   <FaSignOutAlt /> Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css'; // Import custom CSS for styles

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <div className="bg-dark py-3">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">
          <div className="logo-container">
            <img
              src="images/logo.JPG"
              alt="The College Logo"
              className="logo" // Use CSS class for logo styling
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-2 w-100 mt-2 mt-md-0">
            <NavLink className="nav-link text-light" to="/" activeClassName="active" style={{ fontSize: '1.1rem' }}>Home</NavLink>
            <NavLink className="nav-link text-light" to="/provost" activeClassName="active" style={{ fontSize: '1.1rem' }}>Provost</NavLink>
            <NavLink className="nav-link text-light" to="/registrar" activeClassName="active" style={{ fontSize: '1.1rem' }}>Registrar</NavLink>
            <NavLink className="nav-link text-light" to="/librarian" activeClassName="active" style={{ fontSize: '1.1rem' }}>Librarian</NavLink>
            <NavLink className="nav-link text-light" to="/tetfund" activeClassName="active" style={{ fontSize: '1.1rem' }}>TETFUND</NavLink>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Registrar's Office
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/exams-records">Exams and Records</Link></li>
                <li><Link className="dropdown-item" to="/establishment-office">Establishment</Link></li>
                <li><Link className="dropdown-item" to="/admission-office">Admissions</Link></li>
                <li><Link className="dropdown-item" to="/student-affairs">Student Affairs</Link></li>
                <li><Link className="dropdown-item" to="/open-registry">Open Registry</Link></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Schools
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dean-school-of-science">The Dean School of Science</Link></li>
                <li><Link className="dropdown-item" to="/dean-school-of-languages">The Dean School of Languages</Link></li>
                <li><Link className="dropdown-item" to="/dean-school-of-law">The Dean School of Law</Link></li>
                <li><Link className="dropdown-item" to="/education">The Dean School of Education</Link></li>
                <li><Link className="dropdown-item" to="/early-child">The Dean School of Early Child Care Education</Link></li>
                <li><Link className="dropdown-item" to="/school-of-arts">The Dean School of Arts Social and Management Sciences</Link></li>
                <li><Link className="dropdown-item" to="/school-of-vocational">The Dean School of Vocational and Technical Education</Link></li>
                <li><Link className="dropdown-item" to="/centre-for-social-and-management-science">The Dean Centre for Social and Management Sciences</Link></li>
                <li><Link className="dropdown-item" to="/general-studies">The Dean General Studies</Link></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Our Portals
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/staff">Staff</Link></li>
                <li><Link className="dropdown-item" to="/students">Students</Link></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Departments
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/department-computer-science">Department of Computer Science</Link></li>
                <li><Link className="dropdown-item" to="/department-mathematics">Departments of Mathematics</Link></li>
                <li><Link className="dropdown-item" to="/department-english">Department of English</Link></li>
                <li><Link className="dropdown-item" to="/department-hausa">Department of Hausa</Link></li>
                <li><Link className="dropdown-item" to="/integrated-science">Department of Integrated Science</Link></li>
                <li><Link className="dropdown-item" to="/arabic">Department of Arabic</Link></li>
                <li><Link className="dropdown-item" to="/islamic-studies">Department of Islamic Studies</Link></li>
                <li><Link className="dropdown-item" to="/economics">Department of Economics</Link></li>
                <li><Link className="dropdown-item" to="/social-studies">Department of Social Studies</Link></li>
                <li><Link className="dropdown-item" to="/civil-law">Department of Civil Law</Link></li>
                <li><Link className="dropdown-item" to="/sharia-civil-law">Department of Sharia and Civil Law</Link></li>
                <li><Link className="dropdown-item" to="/home-management">Department of Home Management</Link></li>
                <li><Link className="dropdown-item" to="/department-education">Department of Education</Link></li>
                <li><Link className="dropdown-item" to="/primary-education">Department of Primary Education</Link></li>
                <li><Link className="dropdown-item" to="/business-education">Department of Business Education</Link></li>
                <li><Link className="dropdown-item" to="/public-admin">Department of Public Admin</Link></li>
                <li><Link className="dropdown-item" to="/quranic-science">Department of Qur'anic Science</Link></li>
                <li><Link className="dropdown-item" to="/community-social-development">Department of Community and Social Development</Link></li>
                <li><Link className="dropdown-item" to="/peace-conflict-resolution">Department of Peace and Conflict Resolution</Link></li>
                <li><Link className="dropdown-item" to="/library-information-science">Department of Library and Information Science</Link></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Programmes
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/diploma">Diploma</Link></li>
                <li><Link className="dropdown-item" to="/nce">NCE</Link></li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.1rem' }}
              >
                Students
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
                <li><Link className="dropdown-item" to="/payment">Payments</Link></li>
                <li><Link className="dropdown-item" to="/accommodation">Accommodations</Link></li>
                <li><Link className="dropdown-item" to="/results">Results</Link></li>
              </ul>
            </div>
          </div>

          <div className="d-flex gap-2">
            {userInfo ? (
              <div className="dropdown">
                <button
                  className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo.name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logoutHandler}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link className="nav-link text-light" to="/login">
                  <FaSignInAlt /> SignIn
                </Link>
                <Link className="nav-link text-light" to="/register">
                  <FaSignOutAlt /> SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
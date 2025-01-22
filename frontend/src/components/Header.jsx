import React from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
          <div className="logo-container">
            <img
              src="images/logo.JPG"
              alt="The College Logo"
              className="logo" // Use CSS class for logo styling
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3 w-100 mt-2 mt-md-0">
            <Link className="nav-link text-light" to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
            <Link className="nav-link text-light" to="/provost" style={{ fontSize: '1.3rem' }}>Provost</Link>
            <Link className="nav-link text-light" to="/registrar" style={{ fontSize: '1.3rem' }}>Registrar</Link>
            <Link className="nav-link text-light" to="/librarian" style={{ fontSize: '1.3rem' }}>Librarian</Link>
            <Link className="nav-link text-light" to="/tetfund" style={{ fontSize: '1.3rem' }}>TETFUND</Link>

            <div className="dropdown">
              <button
                className="dropdown-toggle nav-link text-light border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '1.3rem' }}
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
                style={{ fontSize: '1.3rem' }}
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
                style={{ fontSize: '1.3rem' }}
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
                style={{ fontSize: '1.3rem' }}
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
                style={{ fontSize: '1.3rem' }}
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
                style={{ fontSize: '1.3rem' }}
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

          <div className="d-flex gap-3">
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
                  <FaSignInAlt /> Sign In
                </Link>
                <Link className="nav-link text-light" to="/register">
                  <FaSignOutAlt /> Sign Up
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
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [fadeNews, setFadeNews] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Institutional portals (external, open in a new tab)
  const portalLinks = [
    { label: "Admin NCE Portal",     href: "https://coelsnguru.safsrms.com",          audience: "Admin",   accent: "linear-gradient(45deg, #2193b0, #6dd5ed)" },
    { label: "Admin Diploma Portal", href: "https://coelsnguru_diploma.safsrms.com",  audience: "Admin",   accent: "linear-gradient(45deg, #FF512F, #F09819)" },
    { label: "Student NCE Portal",   href: "https://coelsnguru.safrecords.com",       audience: "Student", accent: "linear-gradient(45deg, #11998e, #38ef7d)" },
    { label: "Student Diploma Portal", href: "https://coelsnguru_diploma.safrecords.com", audience: "Student", accent: "linear-gradient(45deg, #8E2DE2, #4A00E0)" },
  ];

  // Social media links (placeholder hrefs — update later)
  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      color: "#1877F2",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "#",
      color: "#1DA1F2",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      color: "#E4405F",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      color: "#0A66C2",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.222 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      color: "#FF0000",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.378.505A3.016 3.016 0 0 0 .5 6.186C0 8.07 0 12 0 12s0 3.93.5 5.814a3.016 3.016 0 0 0 2.122 2.136c1.873.505 9.378.505 9.378.505s7.505 0 9.378-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
        </svg>
      ),
    },
  ];

  // Custom COELS announcement notices
  const newsItems = [
    "Welcome to the College of Education and Legal Studies, Nguru. Knowledge is Treasure!",
    "Online registration for the 2026/2027 academic session is currently active.",
    "TETFund Interventions: Advancing standard legal and teacher education."
  ];

  // Quick Links dropdown — grouped destinations for fast access
  const quickLinkGroups = [
    {
      group: "Admissions",
      items: [
        { label: "Apply for Admission", to: "/admission-office" },
        { label: "NCE Programmes",      to: "/nce" },
        { label: "Diploma Programmes",  to: "/diploma" }
      ]
    },
    {
      group: "Student Services",
      items: [
        { label: "Online Registration",   to: "/registration" },
        { label: "School Fees Payment",   to: "/payment" },
        { label: "Hostel Accommodation",  to: "/accommodation" },
        { label: "Examination Results",   to: "/results" }
      ]
    },
    {
      group: "Offices",
      items: [
        { label: "Provost's Office",    to: "/provost" },
        { label: "Registrar's Office",  to: "/registrar" },
        { label: "Student Affairs",     to: "/student-affairs" }
      ]
    },
    {
      group: "Portals",
      items: portalLinks.map(p => ({
        label: p.label,
        to: p.href,
        external: true,
        accent: p.accent
      }))
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
      setSearchQuery("");
    }
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      setMobileMenuOpen(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest('.quick-links-dropdown')) {
        setQuickLinksOpen(false);
      }
      if (!e.target.closest('.portals-dropdown')) {
        setPortalsOpen(false);
      }
    };

    // News Ticker Interval
    const newsTimer = setInterval(() => {
      setFadeNews(false);
      setTimeout(() => {
        setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        setFadeNews(true);
      }, 300);
    }, 5000);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleOutsideClick);
      clearInterval(newsTimer);
    };
  }, []);

  // Complete, deep COELS hierarchical menu structure
  const menuData = [
    { label: "Home", to: "/" },
    {
      label: "Administration",
      to: "#",
      children: [
        { label: "Provost", to: "/provost" },
        { label: "Registrar", to: "/registrar" },
        { label: "Librarian", to: "/librarian" },
        {
          label: "Registrar's Office",
          to: "#",
          children: [
            { label: "Exams and Records", to: "/exams-records" },
            { label: "Establishment", to: "/establishment-office" },
            { label: "Admissions", to: "/admission-office" },
            { label: "Student Affairs", to: "/student-affairs" },
            { label: "Open Registry", to: "/open-registry" }
          ]
        }
      ]
    },
    {
      label: "Schools",
      to: "#",
      children: [
        { label: "School of Science", to: "/dean-school-of-science" },
        { label: "School of Languages", to: "/dean-school-of-languages" },
        { label: "School of Law", to: "/dean-school-of-law" },
        { label: "School of Education", to: "/education" },
        { label: "School of Early Child Care Education", to: "/early-child" },
        { label: "School of Arts, Social & Management Sciences", to: "/school-of-arts" },
        { label: "School of Vocational & Technical Education", to: "/school-of-vocational" },
        { label: "Centre for Social & Management Sciences", to: "/centre-for-social-and-management-science" },
        { label: "School of General Studies", to: "/general-studies" }
      ]
    },
    {
      label: "Departments",
      to: "#",
      children: [
        { label: "Computer Science", to: "/department-computer-science" },
        { label: "Mathematics", to: "/department-mathematics" },
        { label: "English", to: "/department-english" },
        { label: "Hausa", to: "/department-hausa" },
        { label: "Integrated Science", to: "/integrated-science" },
        { label: "Arabic", to: "/arabic" },
        { label: "Islamic Studies", to: "/islamic-studies" },
        { label: "Economics", to: "/economics" },
        { label: "Social Studies", to: "/social-studies" },
        { label: "Civil Law", to: "/civil-law" },
        { label: "Sharia & Civil Law", to: "/sharia-civil-law" },
        { label: "Home Management", to: "/home-management" },
        { label: "Education", to: "/department-education" },
        { label: "Primary Education", to: "/primary-education" },
        { label: "Business Education", to: "/business-education" },
        { label: "Public Admin", to: "/public-admin" },
        { label: "Qur'anic Science", to: "/quranic-science" },
        { label: "Community & Social Development", to: "/community-social-development" },
        { label: "Peace & Conflict Resolution", to: "/peace-conflict-resolution" },
        { label: "Library & Information Science", to: "/library-information-science" }
      ]
    },
    {
      label: "Programmes",
      to: "#",
      children: [
        { label: "Diploma", to: "/diploma" },
        { label: "NCE", to: "/nce" }
      ]
    },
    {
      label: "Students",
      to: "#",
      children: [
        { label: "Registration", to: "/registration" },
        { label: "Payments", to: "/payment" },
        { label: "Accommodations", to: "/accommodation" },
        { label: "Results", to: "/results" }
      ]
    },
    {
      label: "Portals",
      to: "#",
      children: portalLinks.map(p => ({ label: p.label, to: p.href }))
    },
    { label: "TETFUND", to: "/tetfund" }
  ];

  // User session links
  const userNavLinks = userInfo ? [
    { to: "/profile", label: "Profile" },
    { to: "#", label: "Logout", isLogout: true }
  ] : [
    { to: "/register", label: "Sign Up" },
    { to: "/login", label: "Sign In" }
  ];

  // Detect external URLs (used in main nav to render <a target=_blank> for portals etc.)
  const isExternal = (to) => typeof to === 'string' && /^https?:\/\//i.test(to);

  // Recursive Desktop Submenu renderer
  const renderDesktopDropdown = (children) => {
    return (
      <ul className="dropdown-submenu-list">
        {children.map((child, idx) => {
          const hasChildren = child.children && child.children.length > 0;
          const external = !hasChildren && isExternal(child.to);
          return (
            <li key={idx} className={`submenu-item ${hasChildren ? 'has-nested-dropdown' : ''}`}>
              {external ? (
                <a
                  href={child.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="submenu-link submenu-link-external"
                >
                  <span>{child.label}</span>
                  <span className="external-icon" aria-hidden="true">&#8599;</span>
                </a>
              ) : (
                <NavLink
                  to={hasChildren ? "#" : child.to}
                  className="submenu-link"
                  onClick={(e) => {
                    if (hasChildren) e.preventDefault();
                  }}
                >
                  <span>{child.label}</span>
                  {hasChildren && <span className="chevron-right">&#9656;</span>}
                </NavLink>
              )}
              {hasChildren && renderDesktopDropdown(child.children)}
            </li>
          );
        })}
      </ul>
    );
  };

  // Recursive Mobile Accordion Component
  const MobileMenuItem = ({ item, depth = 0, closeMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const external = !hasChildren && isExternal(item.to);

    const handleToggle = (e) => {
      if (hasChildren) {
        e.preventDefault();
        setIsOpen(!isOpen);
      } else {
        closeMenu();
      }
    };

    return (
      <div className={`mobile-nav-item depth-${depth}`}>
        <div className="mobile-nav-link-wrapper">
          {external ? (
            <a
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mobile-link mobile-link-external"
              style={{ paddingLeft: `${(depth * 1) + 1}rem` }}
            >
              <span>{item.label}</span>
              <span className="external-icon" aria-hidden="true">&#8599;</span>
            </a>
          ) : (
            <NavLink
              to={hasChildren ? "#" : item.to}
              onClick={handleToggle}
              className={`mobile-link ${hasChildren ? 'has-children' : ''} ${isOpen ? 'active' : ''}`}
              style={{ paddingLeft: `${(depth * 1) + 1}rem` }}
            >
              <span>{item.label}</span>
              {hasChildren && (
                <span className="submenu-indicator">
                  {isOpen ? '−' : '+'}
                </span>
              )}
            </NavLink>
          )}
        </div>
        {hasChildren && isOpen && (
          <div className="mobile-submenu">
            {item.children.map((child, idx) => (
              <MobileMenuItem
                key={idx}
                item={child}
                depth={depth + 1}
                closeMenu={closeMenu}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`navigation-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Utility Head Bar */}
      <div className="top-utility-bar">
        <div className="top-utility-container">
          <div className="top-left-section">
            <a href="mailto:info@coels.edu" className="top-email-link">
              <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@coels.edu</span>
            </a>

            <div className="latest-news-ticker">
              <span className="ticker-label">Latest News:</span>
              <div className="ticker-content-wrapper">
                <div className={`ticker-item ${fadeNews ? 'fade-in' : 'fade-out'}`}>
                  {newsItems[activeNewsIndex]}
                </div>
              </div>
            </div>
          </div>

          <div className="top-right-section">
            <div className="social-links-row" aria-label="Follow us on social media">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.name}
                  title={s.name}
                  style={{ '--social-color': s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <span className="top-bar-divider" aria-hidden="true"></span>

            <div className="portals-dropdown">
              <button
                className="portals-btn"
                onClick={() => setPortalsOpen(!portalsOpen)}
                aria-label="Toggle Portals menu"
                aria-expanded={portalsOpen}
              >
                <svg className="portal-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                </svg>
                <span>Portals</span>
                <span className="chevron-down-mini">&#9662;</span>
              </button>
              {portalsOpen && (
                <ul className="portals-menu">
                  <li className="portals-menu-group-label">Students</li>
                  {portalLinks.filter(p => p.audience === 'Student').map((item, idx) => (
                    <li key={`s-${idx}`} className="portal-link-item">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setPortalsOpen(false)}>
                        <span className="portal-accent-dot" style={{ background: item.accent }} />
                        <span>{item.label}</span>
                        <span className="portal-external-icon" aria-hidden="true">&#8599;</span>
                      </a>
                    </li>
                  ))}
                  <li className="portals-menu-divider" role="separator" />
                  <li className="portals-menu-group-label">Administration</li>
                  {portalLinks.filter(p => p.audience === 'Admin').map((item, idx) => (
                    <li key={`a-${idx}`} className="portal-link-item">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setPortalsOpen(false)}>
                        <span className="portal-accent-dot" style={{ background: item.accent }} />
                        <span>{item.label}</span>
                        <span className="portal-external-icon" aria-hidden="true">&#8599;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="quick-links-dropdown">
              <button
                className="quick-links-btn"
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                aria-label="Toggle Quick Links"
              >
                <span>Quick Links</span>
                <span className="chevron-down-mini">&#9662;</span>
              </button>
              {quickLinksOpen && (
                <ul className="quick-links-menu">
                  {quickLinkGroups.map((grp, gIdx) => (
                    <React.Fragment key={`grp-${gIdx}`}>
                      {gIdx > 0 && <li className="quick-links-menu-divider" aria-hidden="true"></li>}
                      <li className="quick-links-group-label">{grp.group}</li>
                      {grp.items.map((item, iIdx) => (
                        <li key={`q-${gIdx}-${iIdx}`} className="quick-link-item">
                          {item.external ? (
                            <a
                              href={item.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="quick-link-external"
                              onClick={() => setQuickLinksOpen(false)}
                            >
                              {item.accent && (
                                <span className="portal-accent-dot" style={{ background: item.accent }} aria-hidden="true"></span>
                              )}
                              <span>{item.label}</span>
                              <span className="external-icon" aria-hidden="true">↗</span>
                            </a>
                          ) : (
                            <Link to={item.to} onClick={() => setQuickLinksOpen(false)}>
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Middle branding header section */}
      <div className="middle-branding-bar">
        <div className="middle-branding-container">
          <div className="nav-branding-info">
            <Link to="/" className="branding-logo-link">
              <img
                src="/images/logo.JPG"
                alt="COELS Logo"
                className="branding-logo-image"
              />
              <div className="branding-text-block">
                <h1 className="branding-title">COLLEGE OF EDUCATION AND LEGAL STUDIES</h1>
                <p className="branding-subtitle">Nguru, Yobe State | Motto: Knowledge is Treasure</p>
              </div>
            </Link>
          </div>

          <div className="nav-search-section">
            <form role="search" method="get" className="nav-search-form" onSubmit={handleSearchSubmit}>
              <label htmlFor="branding-search-field">
                <span className="screen-reader-text">Search for:</span>
                <input 
                  id="branding-search-field"
                  type="search" 
                  className="nav-search-field" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  name="s" 
                  title="Search for:" 
                />
              </label>
              <input type="submit" className="nav-search-submit" value="Search" />
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Main Nav Container */}
      <div className="nav-container">
        {/* Scroll-Only Logo Section */}
        <div className="nav-logo-section">
          <Link to="/" className="logo-link">
            <img
              src="/images/logo.JPG"
              alt="COELS Logo Scrolled"
              className="nav-logo-image"
            />
            <div className="logo-text">
              <span className="logo-title">COELS NGURU</span>
              <span className="logo-subtitle">Knowledge is Treasure</span>
            </div>
          </Link>
        </div>

        {isMobile ? (
          <div className="nav-mobile-buttons">
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </button>
          </div>
        ) : (
          <div className="nav-menu">
            <ul className="main-nav-links">
              {menuData.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <li key={idx} className={`desktop-menu-item ${hasChildren ? 'has-dropdown' : ''}`}>
                    <NavLink 
                      to={hasChildren ? "#" : item.to} 
                      className="nav-link"
                      onClick={(e) => {
                        if (hasChildren) e.preventDefault();
                      }}
                    >
                      <span className="nav-link-text">{item.label}</span>
                      {hasChildren && <span className="chevron-down">&#9662;</span>}
                    </NavLink>
                    {hasChildren && renderDesktopDropdown(item.children)}
                  </li>
                );
              })}
            </ul>
            <div className="user-nav-links">
              {userNavLinks.map((link, idx) => {
                if (link.isLogout) {
                  return (
                    <button key={idx} onClick={logoutHandler} className="user-link border-0 bg-transparent" style={{ cursor: 'pointer' }}>
                      <span className="nav-link-text">{link.label}</span>
                    </button>
                  );
                }
                return (
                  <NavLink key={idx} to={link.to} className="user-link">
                    <span className="nav-link-text">{link.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}

        {isMobile && (
          <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="mobile-links">
              <div className="mobile-menu-title">Main Menu</div>
              {menuData.map((item, idx) => (
                <MobileMenuItem
                  key={idx}
                  item={item}
                  closeMenu={() => setMobileMenuOpen(false)}
                />
              ))}
              <div className="mobile-divider"></div>
              <div className="mobile-menu-title">Portals</div>
              {portalLinks.map((p, idx) => (
                <a
                  key={`mp-${idx}`}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link mobile-portal-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="portal-accent-dot" style={{ background: p.accent }} />
                  <span>{p.label}</span>
                  <span className="portal-external-icon" aria-hidden="true">&#8599;</span>
                </a>
              ))}
              <div className="mobile-divider"></div>
              <div className="mobile-menu-title">Account</div>
              {userNavLinks.map((link, idx) => {
                if (link.isLogout) {
                  return (
                    <button
                      key={idx}
                      onClick={logoutHandler}
                      className="mobile-link border-0 bg-transparent text-start w-100"
                      style={{ cursor: 'pointer' }}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <NavLink
                    key={idx}
                    to={link.to}
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
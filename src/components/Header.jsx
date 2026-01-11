import React, { useState } from 'react';
// استيراد الصور
import WhiteLogo from '../assets/white logo.png'; 
import DarkLogo from '../assets/dark logo.png'; // اللوجو الغامق

const Header = ({ theme }) => { // استقبال الثيم فقط
  const [showMenu, setShowMenu] = useState(false);

  // المعادلة السحرية لتبديل اللوجو
  const currentLogo = theme === 'dark' ? WhiteLogo : DarkLogo;

  return (
    <header className="header" id="header">
      <div className="nav-toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
         {/* تغيير اللوجو هنا */}
        <img src={currentLogo} alt="Logo" style={{ width: '60px' }} />
      </div>

      <aside className={`sidebar ${showMenu ? 'show-sidebar' : ''}`} id="sidebar">
        <nav className="nav">
          <div className="nav-logo">
            <a href="#home" className="nav-logo-text">
               {/* تغيير اللوجو هنا */}
              <img src={currentLogo} alt="Logo" style={{ width: '40px' }} />
            </a>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                 {/* ... عناصر القائمة الخاصة بك كما هي ... */}
                 <li className="nav-item">
                  <a href="#home" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-estate nav-icon"></i>
                    <span className="nav-name">Home</span>
                  </a>
                </li>
                 <li className="nav-item">
                  <a href="#about" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-user nav-icon"></i>
                    <span className="nav-name">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-file-alt nav-icon"></i>
                    <span className="nav-name">Skills</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#work" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-briefcase-alt nav-icon"></i>
                    <span className="nav-name">Work</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-setting nav-icon"></i>
                    <span className="nav-name">Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link" onClick={() => setShowMenu(false)}>
                    <i className="uil uil-envelope nav-icon"></i>
                    <span className="nav-name">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-close" id="nav-close" onClick={() => setShowMenu(false)}>
            <i className="uil uil-times"></i>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
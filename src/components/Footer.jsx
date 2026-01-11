import React from 'react';
// استيراد اللوجوهين
import WhiteLogo from '../assets/white logo.png'; 
import DarkLogo from '../assets/dark logo.png'; // اللوجو الغامق للوضع الفاتح

const Footer = ({ theme }) => {
  
  // معادلة تغيير اللوجو
  // لو الوضع Dark (خلفية غامقة) -> نحتاج لوجو فاتح (WhiteLogo)
  // لو الوضع Light (خلفية فاتحة) -> نحتاج لوجو غامق (DarkLogo)
  const currentLogo = theme === 'dark' ? WhiteLogo : DarkLogo;

  return (
    <footer className="footer">
        <div className="footer-bg">
            <div className="footer-container container grid">
                <div>
                    <h1 className="footer-title">ElHawawashi</h1>
                    
                    {/* استخدام اللوجو المتغير */}
                    <img className="foot" src={currentLogo} alt="Logo" style={{width: '60px'}} />
                    
                    <p className="footer-subtitle">Frontend Developer</p>
                </div>
                {/* ... باقي الروابط ... */}
                 <ul className="footer-links">
                    <li><a href="#services" className="footer-links">Services</a></li>
                    <li><a href="#work" className="footer-links">Work</a></li>
                    <li><a href="#contact" className="footer-links">Contact</a></li>
                </ul>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/mohamed-elhawawshi/" target='_blank' className="footer-social"><i class="fa-brands fa-square-linkedin"></i></a>
                    <a href="https://github.com/elhwawshy" target='_blank' className="footer-social"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
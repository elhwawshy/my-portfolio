import React from 'react';
import homeImg from '../assets/Picsart_25-12-30_23-21-35-017.png'; 
import ThemeToggle from './ThemeToggle'; 

// نستقبل الخصائص هنا
const Home = ({ theme, toggleTheme }) => {
  return (
    <>
      {/* نمرر الخصائص لمكون الزر */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <section className="home" id="home">
        <div className="home-container container grid">
          <div className="home-social">
            <span className="home-social-follow">Follow Me</span>
            <div className="home-social-links">
               <a href="https://www.linkedin.com/in/mohamed-elhawawshi/" target="_blank" rel="noreferrer" className="home-social-link"><i class="fa-brands fa-square-linkedin"></i></a>
               <a href="https://github.com/elhwawshy" target="_blank" rel="noreferrer" className="home-social-link"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>

          <img src={homeImg} alt="" className="home-img" />

          <div className="home-data">
            <h1 className="home-title">Hi, I'm Mohamed</h1>
            <h3 className="home-subtitle">Frontend Developer</h3>
            <p className="home-description">I have high level experience in web design, development knowledge and producing quality work.</p>
            <a href="#about" className="button">
              <i className="uil uil-user button-icon"></i> More About me!
            </a>
          </div>

          <div className="my-info">
            <div className="info-item">
              <i className='bx bxl-html5' title="HTML5"></i>
              <i className='bx bxl-css3' title="CSS3"></i>
              <i className='bx bxl-javascript' title="JavaScript"></i>
              <i className='bx bxl-react' title="React"></i>
              <i className='bx bxl-tailwind-css' title="Tailwind"></i> 
              <i className='bx bxl-figma' title="Figma"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
import React from 'react';
import aboutImg from '../assets/Picsart_25-12-30_23-18-49-218.png'; // صورة الـ About

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title" data-heading="My Intro">About me</h2>
      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img" />
        <div className="about-data">
          <h3 className="about-heading">Hi, I'm Mohamed El Hawawshi, based in Egypt</h3>
          <p className="about-description">I'm a web developer, with extensive knowledge and years of experience, working with quality work in web technologies, UI and UX design.</p>
          
          <div className="about-info">
            <div className="about-box"><i className="uil uil-award about-icon"></i><h3 className="about-title">Experience</h3><span className="about-subtitle">2 + Years</span></div>
            <div className="about-box"><i className="uil uil-suitcase-alt about-icon"></i><h3 className="about-title">Completed</h3><span className="about-subtitle">9 + Projects</span></div>
            <div className="about-box"><i className="uil uil-headphones-alt about-icon"></i><h3 className="about-title">Support</h3><span className="about-subtitle">Online 24/7</span></div>
          </div>

          <a href="#contact" className="btn-explore">
             <i className="uil uil-user button-icon"></i> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
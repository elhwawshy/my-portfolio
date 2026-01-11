import React, { useState } from 'react';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1); // 1 for Experience, 2 for Education

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section-title" data-heading="My Journey">Qualification</h2>

        <div className="qualification-container container">
            
            {/* أزرار التبديل بين الخبرة والتعليم */}
            <div className="qualification-tabs">
                <div 
                    className={`qualification-button button--flex ${toggleState === 1 ? 'qualification-active' : ''}`}
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification-icon"></i> Education
                </div>

                <div 
                    className={`qualification-button button--flex ${toggleState === 2 ? 'qualification-active' : ''}`}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                </div>
            </div>

            <div className="qualification-sections">
                
                {/* === Experience Content === */}
                <div className={`qualification-content ${toggleState === 2 ? 'qualification-content-active' : ''}`}>
                    
                    {/* Card 1: Work */}
                    <div className="qual-card">
                        <div className="qual-header">
                            <i className='bx bxs-briefcase-alt-2 qual-icon-bg'></i>
                            <div>
                                <h3 className="qual-title">Frontend Developer</h3>
                                <span className="qual-subtitle">Veroge Inc. (Mansoura)</span>
                                <div className="qual-calendar"><i className="uil uil-calendar-alt"></i> 2024 - Present</div>
                            </div>
                        </div>
                        <p className="qual-desc">
                            Responsible for building responsive websites, converting Figma designs to React code, and improving UX.
                        </p>
                        <div className="qual-tags">
                            <span>React</span><span>CSS3</span><span>Git</span>
                        </div>
                    </div>

                    {/* Card 2: Freelance (إضافة لملء الفراغ) */}
                    <div className="qual-card">
                        <div className="qual-header">
                            <i className='bx bxs-user-account qual-icon-bg'></i>
                            <div>
                                <h3 className="qual-title">Freelance Web Developer</h3>
                                <span className="qual-subtitle">Remote / Upwork</span>
                                <div className="qual-calendar"><i className="uil uil-calendar-alt"></i> 2023 - 2024</div>
                            </div>
                        </div>
                        <p className="qual-desc">
                            Developed custom landing pages and portfolios for various clients using modern web technologies.
                        </p>
                        <div className="qual-tags">
                            <span>HTML</span><span>JavaScript</span><span>Tailwind</span>
                        </div>
                    </div>

                </div>

                {/* === Education Content === */}
                <div className={`qualification-content ${toggleState === 1 ? 'qualification-content-active' : ''}`}>
                    
                    {/* Card 1: University */}
                    <div className="qual-card">
                        <div className="qual-header">
                            <i className='bx bxs-graduation qual-icon-bg'></i>
                            <div>
                                <h3 className="qual-title">Computer Science</h3>
                                <span className="qual-subtitle">Mansoura University</span>
                                <div className="qual-calendar"><i className="uil uil-calendar-alt"></i> 2021 - 2026</div>
                            </div>
                        </div>
                        <p className="qual-desc">
                            Student at the Faculty of Computers and Information (FCI), specializing in software engineering.
                        </p>
                    </div>

                    {/* Card 2: Course */}
                    <div className="qual-card">
                        <div className="qual-header">
                            <i className='bx bxs-certification qual-icon-bg'></i>
                            <div>
                                <h3 className="qual-title">Web Development Diploma</h3>
                                <span className="qual-subtitle">T-Square Academy</span>
                                <div className="qual-calendar"><i className="uil uil-calendar-alt"></i> 6 Months</div>
                            </div>
                        </div>
                        <p className="qual-desc">
                            Intensive bootcamp covering Frontend technologies, Logic, and UI Design principals.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
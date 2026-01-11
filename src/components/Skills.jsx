import React, { useState } from 'react';

const Skills = () => {
  const [toggleState, setToggleState] = useState(1); // 1 = Frontend, 2 = UI/UX

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Talent">Professional Skills</h2>

      <div className="skills-container container">
        
        {/* === أزرار التبديل (Tabs) === */}
        <div className="skills-tabs">
            <div 
                className={`skills-button button--flex ${toggleState === 1 ? 'skills-active' : ''}`}
                onClick={() => toggleTab(1)}
            >
                <i className='bx bxl-brackets skills-tab-icon'></i> Frontend Dev
            </div>

            <div 
                className={`skills-button button--flex ${toggleState === 2 ? 'skills-active' : ''}`}
                onClick={() => toggleTab(2)}
            >
                <i className='bx bxl-palette skills-tab-icon'></i> UI/UX Design
            </div>
        </div>

        <div className="skills-sections">
            
            {/* === Group 1: Modern Frontend Stack === */}
            <div className={`skills-content ${toggleState === 1 ? 'skills-content-active' : ''}`}>
                <div className="skills-box">
                    {/* Skill 1: Next.js & React */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-react skills-icon-new react-color'></i>
                            <h3 className="skills-name">Next.js / React</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>
                    
                    {/* Skill 2: TypeScript */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-typescript skills-icon-new ts-color'></i>
                            <h3 className="skills-name">TypeScript</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    {/* Skill 3: Tailwind CSS */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-tailwind-css skills-icon-new tailwind-color'></i>
                            <h3 className="skills-name">Tailwind / Shadcn</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    {/* Skill 4: State Management (Zustand) */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bx-data skills-icon-new zustand-color'></i>
                            <h3 className="skills-name">Zustand / Query</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    {/* Skill 5: Framer Motion */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bx-movie-play skills-icon-new motion-color'></i>
                            <h3 className="skills-name">Framer Motion</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    {/* Skill 6: Git & Github */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-react skills-icon-new' style={{color: '#61DBFB'}}></i>
                            <h3 className="skills-name">React Native</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* === Group 2: Modern Design & Tools === */}
            <div className={`skills-content ${toggleState === 2 ? 'skills-content-active' : ''}`}>
                <div className="skills-box">
                    {/* Skill 1: Figma */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-figma skills-icon-new figma-color'></i>
                            <h3 className="skills-name">Figma</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    {/* Skill 2: Framer (The No-Code Tool) */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bx-layout skills-icon-new framer-color'></i>
                            <h3 className="skills-name">Framer</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    {/* Skill 3: Photoshop */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-adobe skills-icon-new ps-color'></i>
                            <h3 className="skills-name">Photoshop</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    {/* Skill 4: Illustrator */}
                    <div className="skills-group">
                        <div className="skills-data">
                            <i className='bx bxl-dribbble skills-icon-new ai-color'></i> 
                            {/* Dribbble icon used as generic vector art icon */}
                            <h3 className="skills-name">Illustrator</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

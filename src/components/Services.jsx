import React, { useState } from 'react';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
        <h2 className="section-title" data-heading="Services">What I Offer</h2>

        <div className="services-container container grid">
            
            {/* Service 1: Web Designer */}
            <div className="services-content">
                <div>
                    <i className="uil uil-web-grid services-icon"></i>
                    <h3 className="services-title">Web <br/> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(1)}>
                    View More <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="glass-wrapper">
                        <div className="glass-box">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <span className="glass-title">Web Designer</span>
                            <p className="glass-description">I offer services with more than 3 years of experience with quality work to clients and companies.</p>
                            
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">User Interface Development</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Web Page Development</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Interactive UX/UI Creations</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Company Brand Positioning</p>
                                </li>
                            </ul>
                            
                            <div className="glass-decoration-text">
                                <strong>MOHAMED</strong><p>PORTFOLIO 2026</p><span>VALID</span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service 2: UI/UX Designer */}
            <div className="services-content">
                <div>
                    <i className="uil uil-arrow services-icon"></i>
                    <h3 className="services-title">UI/UX <br/> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(2)}>
                    View More <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                    <div className="glass-wrapper">
                        <div className="glass-box">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <span className="glass-title">UI/UX Designer</span>
                            <p className="glass-description">I offer services with more than 2 years of experience with quality work.</p>
                            
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Usability Testing</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">User Research</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Interaction Design</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Responsive Design</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Branding & Style Guides</p>
                                </li>
                            </ul>
                            
                            <div className="glass-decoration-text">
                                <strong>MOHAMED</strong><p>PORTFOLIO 2026</p><span>VALID</span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service 3: Branding Designer */}
            <div className="services-content">
                <div>
                    <i className="uil uil-edit services-icon"></i>
                    <h3 className="services-title">Branding <br/> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(3)}>
                    View More <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                    <div className="glass-wrapper">
                        <div className="glass-box">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <span className="glass-title">Branding Designer</span>
                            <p className="glass-description">Competitive Analysis and Accessibility Design.</p>
                            
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Competitive Analysis</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Accessibility Design</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Project Management</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Iteration and Refinement</p>
                                </li>
                            </ul>
                            
                            <div className="glass-decoration-text">
                                <strong>MOHAMED</strong><p>PORTFOLIO 2026</p><span>VALID</span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services;

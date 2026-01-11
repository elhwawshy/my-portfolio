import React, { useState } from 'react';

// ⚠️ استبدل أسماء الصور هنا بالأسماء الموجودة فعلياً في مجلد src/assets
import work1 from '../assets/لقطة شاشة 2026-01-03 142557.png'; // صورة Pasta Cosi
import work2 from '../assets/14ea644dd9183c0b8e5c515cb19ed57acd9dd856.png'; // صورة Burger
import work3 from '../assets/لقطة شاشة 2026-01-03 143041.png'; // صورة Brand 1
import work4 from '../assets/لقطة شاشة 2026-01-03 143538.png'; // صورة Brand 2
import work5 from '../assets/لقطة شاشة 2026-01-03 143831.png'; // صورة Brand 3
import work6 from '../assets/لقطة شاشة 2026-01-05 144508.png'; // صورة Brand 4 (أو حملها عندك)

// قاعدة البيانات الخاصة بمشاريعك (Array of Objects)
const projectsData = [
  { 
    id: 1, 
    image: work1, 
    title: "Web Design", 
    category: "web", 
    details: { 
        title: "Boco Loco Dashboard", 
        desc: "A comprehensive admin dashboard with dark mode, providing real-time analytics, user management, and sales reports.", 
        created: "30 Jun 2025", 
        role: "Frontend", 
        link: "https://elhwawshy.github.io/Ryoma/" 
    }
  },
  { 
    id: 2, 
    image: work2, 
    title: "App Design", 
    category: "design",
    details: { 
        title: "Burger Moon App", 
        desc: "An appetizing mobile app interface for a burger joint, featuring seamless food ordering, user authentication, and a vibrant UI.", 
        created: "10 oct 2024", 
        role: "Designer", 
        link: "https://www.figma.com/proto/CxF2141YxZ6S5BqXiSBWQG/BurgerMoon--Community-?node-id=0-1&t=mbUrD45ysDd68XEH-13" 
    }
  },
  { 
    id: 3, 
    image: work3, 
    title: " Web Design", 
    category: "web",
    details: { 
        title: "Boco Loco Restaurant", 
        desc: "A modern, responsive restaurant website design featuring an elegant layout for menu browsing and table reservations.", 
        created: "30 sept 2024", 
        role: "Frontend", 
        link: "https://elhwawshy.github.io/Boco-Loco/" 
    }
  },
  { 
    id: 4, 
    image: work4, 
    title: "Web Design", 
    category: "web",
    details: { 
        title: "Medic Care Platform", 
        desc: "A clean and professional healthcare website designed to build trust, showcasing medical services and doctor appointment booking.", 
        created: "22 feb 2024", 
        role: "Frontend", 
        link: "https://elhwawshy.github.io/medical/" 
    }
  },
  { 
    id: 5, 
    image: work5, 
    title: "Web Design", 
    category: "web",
    details: { 
        title: "NeuralGlass Interface", 
        desc: "A futuristic UI concept featuring holographic elements, glassmorphism effects, and neon aesthetics for a Web3 or tech platform.", 
        created: "30 mar 2025", 
        role: "Frontend", 
        link: "https://elhwawshy.github.io/interface/" 
    }
  },
  { 
    id: 6, 
    image: work6, 
    title: "App Design", 
    category: "design",
    details: { 
        title: "Explora Travel App", 
        desc: "A user-friendly travel companion app with onboarding screens, clean illustrations, and a smooth flow for planning trips.", 
        created: "13 feb 2025", 
        role: "Designer", 
        link: "https://www.figma.com/proto/Yva2PFM6ulRJGZmM6msc90/Login-Register-UI-Design--Community-?node-id=0-1&t=x7oIyhOvcZbi9LYl-1" 
    }
  },
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>
      
      {/* Filters */}
      <div className="work-filters">
        {['all', 'web', 'design'].map((category) => (
          <span 
            key={category}
            onClick={() => setFilter(category)} 
            className={`work-item ${filter === category ? 'active-work' : ''}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="work-container container grid">
        {filteredProjects.map((item) => (
          <div className="work-card" key={item.id}>
            <img src={item.image} alt="" className="work-img" />
            <h3 className="work-title">{item.title}</h3>
            <span className="work-button" onClick={() => setActiveModal(item.id)}>
              Demo <i className="uil uil-arrow-right work-button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {/* Modal Logic (Popup) */}
      {activeModal && (
        <div className="portfolio-popup open">
           <div className="glass-wrapper">
              <div className="glass-box work-glass">
                  <i className="uil uil-times portfolio-popup-close" onClick={() => setActiveModal(null)}></i>
                  <div className="portfolio-popup-content grid">
                      <div className="pp-thumbnail">
                          <img src={projectsData.find(p => p.id === activeModal).image} alt="" className="portfolio-popup-img" />
                      </div>
                      <div className="portfolio-popup-info">
                          <div className="portfolio-popup-subtitle">Featured - <span>{projectsData.find(p => p.id === activeModal).category}</span></div>
                          <div className="portfolio-popup-body">
                              <h3 className="details-title">{projectsData.find(p => p.id === activeModal).details.title}</h3>
                              <p className="details-description">{projectsData.find(p => p.id === activeModal).details.desc}</p>
                              <ul className="details-info">
                                  <li>Created - <span>{projectsData.find(p => p.id === activeModal).details.created}</span></li>
                                  <li>Role - <span>{projectsData.find(p => p.id === activeModal).details.role}</span></li>
                                  <li>View - <span><a href={projectsData.find(p => p.id === activeModal).details.link} target="_blank" rel="noreferrer">Live Demo</a></span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default Work;
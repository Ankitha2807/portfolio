import React, { useState, useEffect } from 'react';
import {  Mail, Phone, MapPin, Github, Linkedin, Code, Award, BookOpen, User, Briefcase, Star, ExternalLink, Calendar, Download } from 'lucide-react';
import './App.css';

// eslint-disable-next-line
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Food Delivery App UI",
      description: "Designed a sleek, user-friendly interface for a food delivery app using Figma with modern UI/UX principles.",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      year: "2023",
      category: "Design"
    },
    {
      title: "NoteSync-E-learning Platform",
      description: "Developed a comprehensive web application for online learning with interactive courses, quizzes, and progress tracking.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      year: "2025",
      category: "Web Development"
    }
  ];

  const skills = [
    { name: "Python", level: 70, category: "Programming" },
    { name: "Java", level: 65, category: "Programming" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "React", level: 75, category: "Frontend" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Figma", level: 80, category: "Design" },
    { name: "Linux", level: 70, category: "System" }
  ];

  const certifications = [
    { name: "Soft Skill Development", issuer: "NPTEL", year: "2024" },
  ];

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-radial"></div>
        <div 
          className="floating-orb"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            Portfolio
          </div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
         <div className="hero-content">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              <img 
                src={process.env.PUBLIC_URL + '/assets/profile.jpg'}
                alt="Ankitha K N"
                className="hero-avatar-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hero-avatar-fallback">
                <User size={80} className="hero-avatar-icon" />
              </div>
            </div>
            <div className="hero-avatar-overlay"></div>
            <div className="avatar-ping"></div>
            <div className="avatar-pulse"></div>
          </div>
          
          
          <h1 className="hero-title">
            Ankitha K N
          </h1>
          
          <p className="hero-subtitle">
            Enthusiastic Computer Science Student & <br />
            <span className="highlight">Full Stack Developer</span>
          </p>
          
          <p className="hero-description">
            I am passionate about applying my skills in coding, problem-solving, and software development 
            to create efficient and effective solutions while continuing to grow and learn.
          </p>
          
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <a 
              href="/assets/ANKITHA K N-CV.pdf" 
              download="ANKITHA K N-CV.pdf"
              className="btn-secondary"
            >
              <Download size={20} className="button-icon" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              About Me
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Welcome to my digital portfolio! I'm a passionate Computer Science student with a drive for 
                creating innovative solutions and beautiful user experiences.
              </p>
              <p className="about-text">
                My journey in technology spans from web development to UI/UX design, always focusing on 
                learning new technologies and best practices. I believe in writing clean, efficient code 
                and creating user-centered designs.
              </p>
              
              <div className="about-features">
                <div className="feature-card">
                  <Code className="feature-icon" size={32} />
                  <h3 className="feature-title">Clean Code</h3>
                  <p className="feature-description">Writing maintainable and efficient code</p>
                </div>
                <div className="feature-card">
                  <Star className="feature-icon" size={32} />
                  <h3 className="feature-title">Problem Solving</h3>
                  <p className="feature-description">Creative solutions to complex challenges</p>
                </div>
              </div>
            </div>
            
            <div className="about-details">
              <div className="about-profile-section">
                <div className="about-profile-image">
                  <img 
                    src="/assets/profile.jpg"
                    alt="Ankitha K N" 
                    className="about-avatar"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="about-avatar-fallback" style={{display: 'none'}}>
                    <User size={60} />
                  </div>
                </div>
              </div>
              
              <h3 className="details-title">Personal Details</h3>
              <div className="details-list">
                <div className="detail-item">
                  <Calendar className="detail-icon" size={20} />
                  <span className="detail-text">Computer Science Student</span>
                </div>
                <div className="detail-item">
                  <MapPin className="detail-icon" size={20} />
                  <span className="detail-text">Hassan, Karnataka</span>
                </div>
                <div className="detail-item">
                  <Mail className="detail-icon" size={20} />
                  <span className="detail-text">knankitha73@gmail.com</span>
                </div>
                <div className="detail-item">
                  <Phone className="detail-icon" size={20} />
                  <span className="detail-text">+91 8217831584</span>
                </div>
              </div>
              
              <div className="languages-section">
                <h4 className="languages-title">Languages</h4>
                <p className="detail-text">English, Hindi, Kannada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Technical Skills
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="skill-category">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Projects
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">
                      {project.category}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button onClick={() => {}} className="project-link">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Education & Certifications
            </h2>
            <dv className="section-divider"></dv>
          </div>
          
          <div className="education-grid">
            {/* Education */}
            <div className="education-section">
              <h3 className="subsection-title">
                <BookOpen className="subsection-icon" />
                Education
              </h3>
              
              <div className="education-item">
                <div className="item-header">
                  <h4 className="item-title">Bachelor of Engineering</h4>
                  <span className="item-year">2026</span>
                </div>
                <p className="item-institution">Malnad College of Engineering, Hassan</p>
                <p className="item-grade">CGPA: 9.3</p>
              </div>
              
              <div className="education-item">
                <div className="item-header">
                  <h4 className="item-title">PU</h4>
                  <span className="item-year">2022</span>
                </div>
                <p className="item-institution">Masters PU College, Hassan</p>
                <p className="item-grade">Percentage: 97.3%</p>
              </div>
              
              <div className="education-item">
                <div className="item-header">
                  <h4 className="item-title">10th Grade</h4>
                  <span className="item-year">2020</span>
                </div>
                <p className="item-institution">C K S English School, Hassan</p>
                <p className="item-grade">87%</p>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="certifications-section">
              <h3 className="subsection-title">
                <Award className="subsection-icon" />
                Certifications
              </h3>
              
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="item-header">
                    <h4 className="item-title">{cert.name}</h4>
                    <span className="item-year">{cert.year}</span>
                  </div>
                  <p className="item-institution">{cert.issuer}</p>
                </div>
              ))}
              
              <div className="extra-activities">
                <h4 className="activities-title">
                  <Briefcase size={20} />
                  Extra Curricular Activities
                </h4>
                <div className="activities-list">
                  <div>• Active member of problem-solving communities, HackerRank</div>
                  <div>• Sports enthusiast</div>
                  <div>• Art and Craft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">
              Let's Connect
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="contact-description">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
          
          <div className="contact-links">
            <a href="mailto:prekshahs03@gmail.com" className="contact-link">
              <Mail className="contact-icon" size={24} />
              <span>knankitha73@gmail.com</span>
            </a>
            <a href="tel:+919148031801" className="contact-link">
              <Phone className="contact-icon" size={24} />
              <span>+91 8217831584</span>
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Ankitha2807" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github className="social-icon" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ankitha-k-n-4a9a95267" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin className="social-icon" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
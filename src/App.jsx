import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* 1. Navigation Bar */}
      <nav className="navbar animate-fade-down">
        <div className="logo">Sharath<span className="dot">.</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Introduction</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/finalresume.pdf" target="_blank" rel="noreferrer" className="resume-btn">Resume</a>
      </nav>

      {/* 2. Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-text animate-fade-in-up">
            <span className="badge">AIML Student • Aspiring AI Engineer</span>
            <h1 className="hero-title">
              <span className="stylish-greeting">Hi, I'm</span> <br />
              <span className="highlight">Meedidoddi Sharath Kumar</span>
            </h1>
            <h3>Building intelligent solutions with Python, Machine Learning, and Deep Learning.</h3>
            <p>
              I am an Artificial Intelligence and Machine Learning student interested in AI, ML, Deep Learning, 
              and full-stack development. I build practical projects that connect intelligent models with real-world web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">Explore My Projects →</a>
              <a href="/finalresume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">View Resume 📄</a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/sharath900" target="_blank" rel="noreferrer" className="icon-circle">GH</a>
              <a href="https://www.linkedin.com/in/sharath-kumar-632b813a7/" target="_blank" rel="noreferrer" className="icon-circle">LN</a>
              <a href="mailto:dhanu13435@gmail.com" className="icon-circle">✉</a>
            </div>
          </div>

          <div className="hero-image-container animate-zoom-in">
            <div className="profile-circle">
              <img src="/sharath.png" alt="Meedidoddi Sharath Kumar" />
            </div>
          </div>
        </div>
      </header>

      {/* 3. About Me Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <p className="section-subtitle-tag">Introduction</p>
          <h2 className="section-title">About Me</h2>

          <div className="about-grid-layout">
            <div className="about-avatar-card interactive-hover">
              <img src="/profile1.png" alt="Sharath Avatar Illustration" className="about-full-img" />
            </div>

            <div className="about-description-box">
              <span className="box-mini-tag">Who am I?</span>
              <h3>I am an AIML student focused on building practical AI-powered applications.</h3>
              <p>
                My interest is in Artificial Intelligence, Machine Learning, Deep Learning, and Python-based web development. 
                I enjoy learning how models work and how they can be connected with real applications using Flask or Django.
              </p>
              <p>
                I am currently building projects such as AI interview preparation systems, student learning assistants, 
                resume analyzers, and intelligent AI platforms. My goal is to become a strong AI engineer with practical project experience.
              </p>

              <div className="about-tag-pills">
                <span className="pill-tag">🧠 AI & ML Enthusiast</span>
                <span className="pill-tag">&lt;/&gt; Python Developer</span>
                <span className="pill-tag">💻 Project Builder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="section-padding dark-bg">
        <div className="container">
          <p className="section-subtitle-tag text-center">Skills</p>
          <h2 className="section-title text-center">Technologies I Work With</h2>

          <div className="skills-matrix-grid">
            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">🐍</div>
              <h4>Python</h4>
              <p>Programming, logic building, automation, backend development, and AI/ML implementation.</p>
            </div>

            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">🧠</div>
              <h4>Machine Learning</h4>
              <p>Model training, prediction systems, data preprocessing, and practical ML workflows.</p>
            </div>

            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">🕸️</div>
              <h4>Deep Learning</h4>
              <p>Neural networks, CNN basics, image classification, and TensorFlow model training.</p>
            </div>

            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">⚙️</div>
              <h4>Flask & Django</h4>
              <p>Web applications, templates, authentication, database handling, and AI model integration.</p>
            </div>

            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">🗄️</div>
              <h4>Databases</h4>
              <p>SQLite, MySQL basics, Django models, storing user data, and database operations.</p>
            </div>

            <div className="skill-item-card interactive-hover">
              <div className="skill-card-icon-wrapper">🐙</div>
              <h4>Git & GitHub</h4>
              <p>Version control, project hosting, repositories, commits, and portfolio project showcase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <p className="section-subtitle-tag text-center">Projects</p>
          <h2 className="section-title text-center">Featured Projects</h2>

          <div className="featured-projects-column-grid">

            <div className="featured-project-box-card interactive-hover">
              <div className="project-card-header-icon">👤</div>
              <h4>AI Interview Mirror</h4>
              <p>An AI-based interview preparation platform...</p>
              <div className="project-action-links">
                <a href="https://github.com/sharath900/ai-interview-mirror.git" target="_blank" rel="noreferrer">GitHub 🔗</a>
                <a href="https://ai-interview-mirror.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </div>

            <div className="featured-project-box-card interactive-hover">
              <div className="project-card-header-icon">🎓</div>
              <h4>StudyMate AI</h4>
              <p>RAG-based learning assistant...</p>
              <div className="project-action-links">
                <a href="https://github.com/sharath900/studymate-ai-rag-chatbot.git" target="_blank" rel="noreferrer">GitHub 🔗</a>
                <a href="https://studymate-ai-rag-chatbot.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </div>

            <div className="featured-project-box-card interactive-hover">
              <div className="project-card-header-icon">📰</div>
              <h4>Context Pulse AI</h4>
              <p>AI-powered news summarization...</p>
              <div className="project-action-links">
                <a href="https://github.com/sharath900/context-pulse-ai.git" target="_blank" rel="noreferrer">GitHub 🔗</a>
                <a href="https://context-pulse-ai.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Certifications */}
      <section id="certifications" className="section-padding dark-bg">
        <div className="container">
          <h2 className="section-title text-center">Certifications</h2>

          <div className="featured-projects-column-grid">

            <div className="featured-project-box-card">
              <h4>Python Certification</h4>
              <a href="/python.png" target="_blank" rel="noreferrer">View Certificate</a>
            </div>

            <div className="featured-project-box-card">
              <h4>AI Certification</h4>
              <a href="/artificialintellegence.pdf" target="_blank" rel="noreferrer">View Certificate</a>
            </div>

            <div className="featured-project-box-card">
              <h4>Deep Learning Certification</h4>
              <a href="/deeplearning.pdf" target="_blank" rel="noreferrer">View Certificate</a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Contact */}
      <section id="contact" className="section-padding text-center">
        <div className="container">
          <h2>Let's connect</h2>

          <a href="mailto:dhanu13435@gmail.com">Email Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Sharath Kumar</p>
      </footer>
    </div>
  );
}

export default App;
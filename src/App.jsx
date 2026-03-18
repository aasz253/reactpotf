import { useState, useEffect, useRef } from 'react'
import './index.css'
import profileImage from './my potfolio.jpg'

const personalDetails = {
  name: "Anthony Sifuna",
  profession: "Software Engineering Student | Full-Stack Developer",
  specializations: ["Cybersecurity", "AI & Machine Learning", "Cloud Computing"],
  location: "Kakamega, Kenya",
  email: "antonysifuna07@gmail.com",
  phone: "+254 792 325 646",
  website: "https://sifunacodexprofesionalpotfolio.netlify.app/",
  github: "https://github.com/aasz253",
  linkedin: "https://www.linkedin.com/in/sifuna-codex-3238203b4",
  bio: "Software Engineering student passionate about building scalable web applications, exploring cybersecurity, and developing intelligent systems using AI and machine learning. Focused on creating impactful tech solutions and continuously growing in cloud computing and modern software development."
}

const skills = [
  {
    title: "Cybersecurity",
    icon: "🛡️",
    description: "Protecting systems, networks, and programs from digital attacks. Knowledge of security protocols, vulnerability assessment, and threat mitigation."
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Building intelligent systems that learn from data. Experience with neural networks, deep learning, and predictive modeling."
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    description: "Designing and deploying scalable cloud solutions. Proficient in cloud architecture, serverless computing, and DevOps practices."
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [copied, setCopied] = useState(false)
  const [visibleSections, setVisibleSections] = useState({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'skills', 'contact']
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
          }
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openLink = (url) => {
    if (url) window.open(url, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    setFormStatus('submitting')
    
    try {
      const response = await fetch('https://formspree.io/f/xovkojdz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus(null), 5000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollTo('hero')}>
            <span className="logo-bracket">&lt;</span>
            Anthony
            <span className="logo-bracket">/&gt;</span>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollTo('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
            <li><button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <section id="hero" ref={heroRef} className="hero">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img src={profileImage} alt={personalDetails.name} className="profile-image" />
              <div className="profile-glow"></div>
            </div>
            <div className="profile-ring"></div>
          </div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalDetails.name}</h1>
          <div className="specialization-scroll">
            <div className="specialization-track">
              {[...personalDetails.specializations, ...personalDetails.specializations, ...personalDetails.specializations].map((spec, i) => (
                <span key={i} className="spec-tag">{spec}</span>
              ))}
            </div>
          </div>
          <p className="hero-profession">
            <Typewriter text={personalDetails.profession} />
          </p>
          <p className="hero-location">📍 {personalDetails.location}</p>
          <button className="hero-cta" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>
        <div className="scroll-indicator" onClick={() => scrollTo('about')}>
          <span>↓</span>
        </div>
      </section>

      <section id="about" className={`about ${visibleSections.about ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <div className="about-content">
              <p className="about-bio">{personalDetails.bio}</p>
              <div className="about-tags">
                {personalDetails.specializations.map((spec, i) => (
                  <span key={i} className="tag">{spec}</span>
                ))}
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">Student</span>
                <span className="stat-label">Software Engineering</span>
              </div>
              <div className="stat">
                <span className="stat-number">Full-Stack</span>
                <span className="stat-label">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`skills ${visibleSections.skills ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Specializations</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`contact ${visibleSections.contact ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows="5" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {formStatus === 'success' && <p className="form-success">Thank you! I'll get back to you soon.</p>}
              {formStatus === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
            </form>
            <div className="contact-cards">
              <div className="contact-card" onClick={copyEmail}>
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>{personalDetails.email}</p>
                <span className="copy-hint">{copied ? 'Copied!' : 'Click to copy'}</span>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>Phone</h3>
                <p>{personalDetails.phone}</p>
              </div>
              <div className="contact-card" onClick={() => openLink(personalDetails.github)}>
                <div className="contact-icon">💻</div>
                <h3>GitHub</h3>
                <p>aasz253</p>
              </div>
              <div className="contact-card" onClick={() => openLink(personalDetails.linkedin)}>
                <div className="contact-icon">🔗</div>
                <h3>LinkedIn</h3>
                <p>Connect</p>
              </div>
              <div className="contact-card" onClick={() => openLink(personalDetails.website)}>
                <div className="contact-icon">🌐</div>
                <h3>Portfolio</h3>
                <p>View Site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 {personalDetails.name}. All rights reserved.</p>
          <button className="back-to-top" onClick={() => scrollTo('hero')}>
            ↑ Back to Top
          </button>
        </div>
      </footer>
    </div>
  )
}

function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState('')
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [text])

  return <span className="typewriter">{displayed}<span className="cursor">|</span></span>
}

export default App

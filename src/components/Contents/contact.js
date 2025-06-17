import React, { useEffect } from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faDev
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  // Initialize the card glow effect
  useEffect(() => {
    // Check for light or dark theme
    const isLightTheme = document.body.classList.contains('light-theme');
    
    // Handle card glow effect
    const cards = document.querySelectorAll('.tech-card');
    
    cards.forEach(card => {
      const glow = card.querySelector('.card-glow');
      
      if (!glow) return;
      
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        
        // Higher opacity for light theme
        if (isLightTheme) {
          glow.style.opacity = '0.3';
        } else {
          glow.style.opacity = '0.15';
        }
      };
      
      const handleMouseLeave = () => {
        glow.style.opacity = '0';
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Clean up event listeners
    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className="content" id="contact">
      <div className="section slide-up">
        <h3 className="tech-header">Get In Touch</h3>
        <p className="mb-4">
          I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers.
          Feel free to reach out to me through any of the channels below.
        </p>
        
        <div className="contact-section">
          <div className="contact-grid">
            <div className="contact-card tech-card">
              <div className="card-glow"></div>
              <div className="contact-icon">
                <FAIcon icon={faEnvelope} style={{ color: 'white' }} />
              </div>
              <h4>Email</h4>
              <a href="mailto:sahashuvradeb@gmail.com" className="contact-link">
                sahashuvradeb@gmail.com
              </a>
            </div>
            
            <div className="contact-card tech-card">
              <div className="card-glow"></div>
              <div className="contact-icon">
                <FAIcon icon={faPhone} style={{ color: 'white' }} />
              </div>
              <h4>Phone</h4>
              <a href="tel:+8801926359697" className="contact-link">
                +880 1926 359697
              </a>
            </div>
            
            <div className="contact-card tech-card">
              <div className="card-glow"></div>
              <div className="contact-icon">
                <FAIcon icon={faMapMarkerAlt} style={{ color: 'white' }} />
              </div>
              <h4>Location</h4>
              <span className="contact-text">Dhaka, Bangladesh</span>
            </div>
          </div>
          
          <div className="social-section">
            <h4 className="social-heading">Connect With Me</h4>
            <div className="social-grid">
              <a 
                href="https://github.com/shuvradeb-saha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card tech-card"
              >
                <div className="card-glow"></div>
                <FAIcon icon={faGithub} style={{ color: 'var(--text-primary)' }} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shuvradeb-saha-a093aa158/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card tech-card"
              >
                <div className="card-glow"></div>
                <FAIcon icon={faLinkedinIn} style={{ color: 'var(--text-primary)' }} />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/ShuvradebSaha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card tech-card"
              >
                <div className="card-glow"></div>
                <FAIcon icon={faTwitter} style={{ color: 'var(--text-primary)' }} />
                <span>X (Twitter)</span>
              </a>
              
              <a 
                href="https://dev.to/shuvradeb_saha_8ebebb3c3f" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card tech-card"
              >
                <div className="card-glow"></div>
                <FAIcon icon={faDev} style={{ color: 'var(--text-primary)' }} />
                <span>Dev.to</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';

const TechEffects = () => {
  useEffect(() => {
    // Check for light or dark theme
    const isLightTheme = document.body.classList.contains('light-theme');
    
    // Handle card glow effect
    const handleCardGlowEffect = () => {
      const cards = document.querySelectorAll('.tech-card');
      
      cards.forEach(card => {
        const glow = card.querySelector('.card-glow');
        
        if (!glow) return;
        
        card.addEventListener('mousemove', (e) => {
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
        });
        
        card.addEventListener('mouseleave', () => {
          glow.style.opacity = '0';
        });
      });
    };
    
    // Initialize effects
    handleCardGlowEffect();
    
    // Clean up event listeners
    return () => {
      const cards = document.querySelectorAll('.tech-card');
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default TechEffects;

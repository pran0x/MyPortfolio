// Enhanced hacker portfolio JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation
  initNavigation();
  
  // Initialize terminal controls
  initTerminalControls();
  
  // Matrix rain effect
  createMatrixRain();
  
  // Boot sequence
  handleBootSequence();
  
  // Add realistic boot effects
  addBootEffects();
  
  // Glitch text effects
  enhanceGlitchText();
  
  // Skill bars animation
  animateSkillBars();
  
  // Terminal typing effects
  addTerminalEffects();
  
  // Mouse tracking glow effect
  addMouseGlow();
  
  // Random text corruption
  addTextCorruption();
  
  // Initialize real-time clock
  initSystemClock();
});

// Matrix rain background effect
function createMatrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");
  
  const fontSize = 10;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(drawMatrix, 35);
  
  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Boot sequence handler
function handleBootSequence() {
  const bootSequence = document.getElementById('bootSequence');
  const mainTerminal = document.getElementById('mainTerminal');
  const bootLines = document.querySelectorAll('.boot-line');
  
  // Hide main terminal initially
  mainTerminal.style.opacity = '0';
  mainTerminal.style.transform = 'translateY(20px)';
  
  // Add realistic loading delays and effects
  bootLines.forEach((line, index) => {
    setTimeout(() => {
      // Remove cursor from previous line
      if (index > 0) {
        bootLines[index - 1].classList.add('completed');
      }
      
      // Add some random delay to make it feel more realistic
      const randomDelay = Math.random() * 200;
      setTimeout(() => {
        line.classList.add('completed');
      }, 800 + randomDelay);
    }, index * 700 + 300);
  });
  
  // Transition to main terminal after boot sequence
  setTimeout(() => {
    bootSequence.style.display = 'none';
    mainTerminal.style.opacity = '1';
    mainTerminal.style.transform = 'translateY(0)';
    mainTerminal.style.transition = 'all 1.5s ease-out';
  }, 12000); // Match the CSS animation duration
}

// Add realistic hacker-style boot effects
function addBootEffects() {
  const bootLines = document.querySelectorAll('.boot-line');
  const hackingChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  bootLines.forEach((line, index) => {
    // Skip header and final lines
    if (line.classList.contains('boot-header') || 
        line.classList.contains('boot-final') || 
        line.classList.contains('boot-access')) {
      return;
    }
    
    setTimeout(() => {
      // Add character scrambling effect during typing
      const originalText = line.textContent;
      const words = originalText.split(' ');
      
      // Scramble effect for the first few characters
      let scrambleCount = 0;
      const scrambleInterval = setInterval(() => {
        if (scrambleCount > 3) {
          clearInterval(scrambleInterval);
          line.textContent = originalText;
          return;
        }
        
        let scrambledText = '';
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.7 && originalText[i] !== ' ') {
            scrambledText += hackingChars[Math.floor(Math.random() * hackingChars.length)];
          } else {
            scrambledText += originalText[i];
          }
        }
        line.textContent = scrambledText;
        scrambleCount++;
      }, 100);
      
      // Add random pause effect
      if (Math.random() > 0.6) {
        setTimeout(() => {
          line.style.opacity = '0.5';
          setTimeout(() => {
            line.style.opacity = '1';
          }, 200);
        }, 500);
      }
    }, index * 700 + Math.random() * 300);
  });
}

// Enhanced glitch text effects
function enhanceGlitchText() {
  const glitchElements = document.querySelectorAll('.glitch-text');
  
  glitchElements.forEach(element => {
    setInterval(() => {
      if (Math.random() > 0.7) {
        element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        
        setTimeout(() => {
          element.style.transform = 'translate(0, 0)';
          element.style.filter = 'hue-rotate(0deg)';
        }, 100);
      }
    }, 500);
  });
}

// Animate skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute('data-level');
        entry.target.style.width = level + '%';
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Terminal typing effects
function addTerminalEffects() {
  const commandOutputs = document.querySelectorAll('.command-output pre');
  
  commandOutputs.forEach(output => {
    const text = output.innerHTML;
    output.innerHTML = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        output.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 20);
  });
}

// Mouse tracking glow effect
function addMouseGlow() {
  const glow = document.createElement('div');
  glow.style.position = 'fixed';
  glow.style.width = '20px';
  glow.style.height = '20px';
  glow.style.background = 'radial-gradient(circle, rgba(0,255,0,0.3) 0%, transparent 70%)';
  glow.style.borderRadius = '50%';
  glow.style.pointerEvents = 'none';
  glow.style.zIndex = '9999';
  glow.style.transform = 'translate(-50%, -50%)';
  glow.style.transition = 'all 0.1s ease';
  document.body.appendChild(glow);
  
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// Random text corruption effect
function addTextCorruption() {
  const corruptibleElements = document.querySelectorAll('.log-message, .skill-text');
  
  setInterval(() => {
    const element = corruptibleElements[Math.floor(Math.random() * corruptibleElements.length)];
    if (element && Math.random() > 0.95) {
      const originalText = element.textContent;
      const corruptedText = originalText.split('').map(char => 
        Math.random() > 0.7 ? String.fromCharCode(Math.random() * 94 + 33) : char
      ).join('');
      
      element.textContent = corruptedText;
      
      setTimeout(() => {
        element.textContent = originalText;
      }, 150);
    }
  }, 2000);
}

// Sidebar functionality
// Navigation functionality
function initNavigation() {
  const navProfileImage = document.getElementById('navProfileImage');
    // Debug image loading
  if (navProfileImage) {
    navProfileImage.onerror = function() {
      console.log('LinkedIn image failed to load, using fallback:', this.src);
      // Set a cyber-themed fallback background
      this.style.background = `
        radial-gradient(circle at 30% 30%, rgba(0, 255, 0, 0.4), transparent 60%),
        radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.3), transparent 60%),
        conic-gradient(from 0deg, #00ff00, #00ffff, #00ff00)
      `;
      this.style.border = '3px solid #00ff00';
      this.alt = 'pran0x - Cyber Operative';
      // Try to load from local assets as fallback
      this.src = 'assets/profile.jpg';
    };
      navProfileImage.onload = function() {
      console.log('Profile image loaded successfully:', this.src);
      // Add a subtle glow effect for LinkedIn images
      if (this.src.includes('linkedin')) {
        this.style.boxShadow = 'inset 0 0 20px rgba(0, 255, 0, 0.2)';
      }
    };
  }
  
  // Add hover effects to skill tags
  const skillTags = document.querySelectorAll('.nav-skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'translateY(-2px) scale(1)';
    });
  });
  
  // Add click effects to achievements
  const achievements = document.querySelectorAll('.nav-achievement');
  achievements.forEach(achievement => {
    achievement.addEventListener('click', () => {
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.background = 'rgba(255, 255, 0, 0.5)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      ripple.style.pointerEvents = 'none';
      
      const rect = achievement.getBoundingClientRect();
      ripple.style.left = rect.left + rect.width / 2 + 'px';
      ripple.style.top = rect.top + rect.height / 2 + 'px';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        if (document.body.contains(ripple)) {
          document.body.removeChild(ripple);
        }
      }, 600);
    });
  });
}

// Add ripple animation for achievements
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

// Create floating cyber particles around navigation
function createNavParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'sidebar-particles';
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '999';
  document.body.appendChild(particleContainer);
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#00ff00';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 5px #00ff00';
    particle.style.left = Math.random() * 350 + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animation = 'particleFloat 3s linear forwards';
    
    particleContainer.appendChild(particle);
    
    setTimeout(() => {
      particleContainer.removeChild(particle);
    }, 3000);
  }
  
  setInterval(createParticle, 500);
}

// CSS animation for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;
document.head.appendChild(particleStyle);

// Add cursor trail effect
function addCursorTrail() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
  });
  
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      
      circle.x = x;
      circle.y = y;
      
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
}

// Add interactive terminal commands
function addInteractiveCommands() {
  const blocks = document.querySelectorAll('.block');
  
  blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
      block.style.transform = 'scale(1.02)';
      block.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.5)';
      
      setTimeout(() => {
        block.style.transform = 'scale(1)';
        block.style.boxShadow = '';
      }, 200);
    });
  });
}

// Initialize interactive commands
document.addEventListener('DOMContentLoaded', () => {
  addInteractiveCommands();
});

// Konami code easter egg
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.length === konamiSequence.length && 
      konamiCode.every((val, index) => val === konamiSequence[index])) {
    triggerMatrixMode();
  }
});

function triggerMatrixMode() {
  document.body.style.filter = 'invert(1) hue-rotate(180deg)';
  document.body.style.animation = 'pulse 0.5s infinite';
  
  setTimeout(() => {
    document.body.style.filter = '';
    document.body.style.animation = '';
  }, 3000);
  
  // Show secret message
  const secret = document.createElement('div');
  secret.textContent = 'MATRIX MODE ACTIVATED - WELCOME TO THE REAL WORLD';
  secret.style.position = 'fixed';
  secret.style.top = '50%';
  secret.style.left = '50%';
  secret.style.transform = 'translate(-50%, -50%)';
  secret.style.color = '#ff0000';
  secret.style.fontSize = '2rem';
  secret.style.fontWeight = 'bold';
  secret.style.textShadow = '0 0 20px #ff0000';
  secret.style.zIndex = '10000';
  document.body.appendChild(secret);
  
  setTimeout(() => {
    document.body.removeChild(secret);
  }, 3000);
}

// Real-time system clock function
function initSystemClock() {
  const clockElement = document.getElementById('systemClock');
  if (!clockElement) return;
  
  function updateClock() {
    const now = new Date();
    const utcTime = now.toISOString();
    clockElement.textContent = `> SYSTEM CLOCK SYNCED: ${utcTime}`;
  }
  
  // Update immediately
  updateClock();
  
  // Update every second
  setInterval(updateClock, 1000);
}

// Certificate modal functions
function openCertificate(imageUrl) {
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('certificateImage');
  
  if (modal && modalImage) {
    modalImage.src = imageUrl;
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add keyboard event listener for ESC key
    document.addEventListener('keydown', handleModalKeydown);
  }
}

function closeCertificate() {
  const modal = document.getElementById('certificateModal');
  
  if (modal) {
    modal.style.display = 'none';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
    
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleModalKeydown);
  }
}

function handleModalKeydown(event) {
  if (event.key === 'Escape') {
    closeCertificate();
  }
}

// Prevent modal close when clicking on the image itself
document.addEventListener('DOMContentLoaded', function() {
  const modalContent = document.querySelector('.certificate-modal-content');
  const modalImage = document.getElementById('certificateImage');
  
  if (modalContent && modalImage) {
    modalImage.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
});

// Terminal Controls Functionality
function initTerminalControls() {
  const closeBtn = document.getElementById('closeBtn');
  const minimizeBtn = document.getElementById('minimizeBtn');
  const maximizeBtn = document.getElementById('maximizeBtn');
  const terminal = document.getElementById('mainTerminal');
  const terminalTitle = document.querySelector('.terminal-title');
  const shutdownOverlay = document.getElementById('shutdownOverlay');
  // Close button - shutdown animation
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      // Add visual feedback
      closeBtn.classList.add('active', 'loading');
      
      // Show shutdown overlay
      shutdownOverlay.classList.add('active');
      
      // After shutdown animation completes, fade out the page
      setTimeout(() => {
        document.body.style.transition = 'opacity 2s ease-out';
        document.body.style.opacity = '0';
        
        // Simulate system shutdown
        setTimeout(() => {
          // Reset everything for potential "reboot"
          shutdownOverlay.classList.remove('active');
          document.body.style.opacity = '1';
          closeBtn.classList.remove('loading', 'active');
          
          // Show a brief "rebooting" message
          const bootSequence = document.getElementById('bootSequence');
          if (bootSequence) {
            bootSequence.style.display = 'flex';
            bootSequence.style.animation = 'none';
            bootSequence.style.opacity = '1';
            bootSequence.style.visibility = 'visible';
            
            setTimeout(() => {
              bootSequence.style.animation = 'bootFadeOut 3s ease-in-out forwards';
            }, 2000);
          }
        }, 3000);
      }, 7000);
    });
  }
  // Minimize button - hide main content
  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      minimizeBtn.classList.add('active', 'loading');
      
      setTimeout(() => {
        terminal.classList.toggle('minimized');
        minimizeBtn.classList.remove('loading', 'active');
        
        // Add visual feedback
        if (terminal.classList.contains('minimized')) {
          showTerminalFeedback('TERMINAL MINIMIZED', 'warning');
        } else {
          showTerminalFeedback('TERMINAL RESTORED', 'success');
        }
      }, 300);
    });
  }
  // Maximize button - fullscreen mode
  if (maximizeBtn) {
    maximizeBtn.addEventListener('click', () => {
      maximizeBtn.classList.add('active', 'loading');
      
      setTimeout(() => {
        terminal.classList.toggle('maximized');
        maximizeBtn.classList.remove('loading', 'active');
        
        // Add visual feedback
        if (terminal.classList.contains('maximized')) {
          showTerminalFeedback('TERMINAL MAXIMIZED', 'success');
        } else {
          showTerminalFeedback('TERMINAL RESTORED', 'info');
        }
      }, 300);
    });
  }

  // Terminal title click - replay boot sequence
  if (terminalTitle) {
    terminalTitle.addEventListener('click', () => {
      const bootSequence = document.getElementById('bootSequence');
      if (bootSequence) {
        showTerminalFeedback('REBOOTING SYSTEM...', 'warning');
        
        setTimeout(() => {
          bootSequence.style.display = 'flex';
          bootSequence.style.animation = 'none';
          bootSequence.style.opacity = '1';
          bootSequence.style.visibility = 'visible';
          
          // Reset boot lines
          const bootLines = bootSequence.querySelectorAll('.boot-line');
          bootLines.forEach(line => {
            line.classList.remove('completed');
            line.style.animation = 'none';
            line.style.opacity = '0';
            line.style.width = '0';
          });
          
          // Restart animations
          setTimeout(() => {
            bootLines.forEach((line, index) => {
              setTimeout(() => {
                line.style.animation = 'typewriterBoot 0.8s steps(40, end) forwards';
              }, index * 700);
            });
          }, 100);
          
          // Hide boot sequence after completion
          setTimeout(() => {
            bootSequence.style.animation = 'bootFadeOut 3s ease-in-out forwards';
          }, bootLines.length * 700 + 2000);
        }, 1000);
      }
    });
  }

  // Escape key to exit fullscreen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && terminal.classList.contains('maximized')) {
      terminal.classList.remove('maximized');
      showTerminalFeedback('EXITED FULLSCREEN', 'info');
    }
  });
}

// Terminal feedback system
function showTerminalFeedback(message, type = 'info') {
  const feedback = document.createElement('div');
  feedback.className = `terminal-feedback terminal-feedback-${type}`;
  feedback.textContent = message;
  
  // Style the feedback
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    color: ${type === 'success' ? '#00ff00' : type === 'warning' ? '#ffff00' : type === 'error' ? '#ff0000' : '#00ffff'};
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid ${type === 'success' ? '#00ff00' : type === 'warning' ? '#ffff00' : type === 'error' ? '#ff0000' : '#00ffff'};
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    z-index: 10000;
    animation: feedbackSlideIn 0.3s ease-out;
    box-shadow: 0 0 20px ${type === 'success' ? 'rgba(0, 255, 0, 0.3)' : type === 'warning' ? 'rgba(255, 255, 0, 0.3)' : type === 'error' ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 255, 255, 0.3)'};
  `;

  document.body.appendChild(feedback);

  // Remove after 3 seconds
  setTimeout(() => {
    feedback.style.animation = 'feedbackSlideOut 0.3s ease-in forwards';
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.parentNode.removeChild(feedback);
      }
    }, 300);
  }, 3000);
}

// Add feedback animations to CSS
const feedbackStyles = document.createElement('style');
feedbackStyles.textContent = `
  @keyframes feedbackSlideIn {
    from { 
      transform: translateX(100%);
      opacity: 0;
    }
    to { 
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes feedbackSlideOut {
    from { 
      transform: translateX(0);
      opacity: 1;
    }
    to { 
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(feedbackStyles);

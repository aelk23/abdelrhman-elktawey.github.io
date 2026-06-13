// Wait for DOM content
window.addEventListener('DOMContentLoaded', (event) => {
    // Check if particlesJS is loaded
    if (typeof particlesJS !== 'undefined') {
        const isMobile = window.innerWidth < 768;
        
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": isMobile ? 40 : 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#3498db" },
                "line_linked": { "enable": true, "distance": 150, "color": "#3498db", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            },
            "retina_detect": true
        });
    }
});
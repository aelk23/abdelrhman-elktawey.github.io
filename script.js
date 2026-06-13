window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "size": { "value": 1, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 180, 
                    "color": "#87ceeb", 
                    "opacity": 0.08, 
                    "width": 1 
                },
                "move": { "enable": true, "speed": 1 }
            },
            "interactivity": {
                "detect_on": "window", 
                "events": {
                    "onhover": { "enable": true, "mode": ["grab", "repulse"] }
                },
                "modes": {
                    "grab": { "distance": 200, "line_linked": { "opacity": 0.3 } },
                    "repulse": { "distance": 100, "duration": 0.4 }
                }
            },
            "retina_detect": true
        });
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 2, "random": true },
                "line_linked": { 
                    "enable": true, 
                    "distance": 150, 
                    "color": "#87ceeb", 
                    "opacity": 0.2, 
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.6, 
                    "direction": "none", 
                    "random": true, 
                    "straight": false, 
                    "out_mode": "out", 
                    "bounce": false 
                }
            },
            "interactivity": {
                "detect_on": "window", 
                "events": {
                    "onhover": { "enable": true, "mode": ["bubble", "repulse"] }
                },
                "modes": {
                    "bubble": { 
                        "distance": 200, 
                        "size": 6, 
                        "duration": 0.4, 
                        "opacity": 0.9 
                    },
                    "repulse": { "distance": 100, "duration": 0.4 }
                }
            },
            "retina_detect": true
        });
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "size": { "value": 2, "random": true },
                "line_linked": { 
                    "enable": true, 
                    "distance": 150, 
                    "color": "#87ceeb", 
                    "opacity": 0.2, 
                    "width": 1 
                },
                "move": { "enable": true, "speed": 1 }
            },
            "interactivity": { "events": { "onhover": { "enable": false } } },
            "retina_detect": true
        });
    }
});

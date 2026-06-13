/* script.js */
window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 1, "random": false }, // حجم الرؤوس الدائرية صغير جداً كما طلبت
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#87ceeb",
                    "opacity": 0.05, // شفافية الخطوط شبه معدومة
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        // هنا التعديل: تفعيل التجاذب (grab) والتنافر (repulse) معاً
                        "mode": ["grab", "repulse"] 
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200, // مسافة التجاذب
                        "line_linked": { "opacity": 0.3 } // تظهر الخطوط بوضوح أكبر عند التجاذب
                    },
                    "repulse": {
                        "distance": 100, // مسافة التنافر
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

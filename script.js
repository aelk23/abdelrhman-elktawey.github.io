window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 140, "density": { "enable": true, "value_area": 900 } },
                "color": { "value": "#00f2fe" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2, "random": true },
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 220, // أطول سحب للخطوط
                    "color": "#00f2fe", 
                    "opacity": 0.015, // تقليل الشفافية لتصبح فخمة وخافتة جداً
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.4, 
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
                    "onhover": { "enable": true, "mode": "grab" }
                },
                "modes": {
                    "grab": { 
                        "distance": 220, 
                        "line_linked": { "opacity": 0.3 } 
                    }
                }
            },
            "retina_detect": true
        });

        // --- محرك الهالة المطور الآمن ---
        const auraEl = document.getElementById('mouse-aura');
        if (auraEl) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let auraX = mouseX;
            let auraY = mouseY;

            let targetOpacity = 0;
            let currentOpacity = 0;
            let mouseTimeout;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                // وضوح ممتاز متوسط الشفافية عند التحريك
                targetOpacity = 0.65; 
                
                clearTimeout(mouseTimeout);
                // تختفي وتتلاشى تماماً ببطء شديد خلال 5 ثوانٍ عند السكون
                mouseTimeout = setTimeout(() => {
                    targetOpacity = 0;
                }, 5000); 
            });

            function updateAura() {
                auraX += (mouseX - auraX) * 0.08;
                auraY += (mouseY - auraY) * 0.08;

                // ترانزشن ناعم جداً ومناسب للمدة المطلوبة
                currentOpacity += (targetOpacity - currentOpacity) * 0.02;

                document.documentElement.style.setProperty('--mouse-x', `${auraX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${auraY}px`);
                document.documentElement.style.setProperty('--aura-opacity', currentOpacity);

                requestAnimationFrame(updateAura);
            }
            updateAura();
        }
    }
});

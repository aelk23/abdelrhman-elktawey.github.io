window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 75, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f2fe" }, // تم تغيير لون النقاط للسايان
                "shape": { "type": "circle" },
                "opacity": { "value": 0.25, "random": true },
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 140, 
                    "color": "#00f2fe", // لون الخطوط سايان باهت جداً
                    "opacity": 0.04, 
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.5, 
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
                    "grab": { "distance": 180, "line_linked": { "opacity": 0.25 } }
                }
            },
            "retina_detect": true
        });

        // --- محرك الهالة الإنسيابية المتقدم (Smooth Lerp Aura) ---
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
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

                // رفع الشفافية لـ 0.25 لتظهر الهالة بشكل أوضح وممتاز
                targetOpacity = 0.25; 
                
                clearTimeout(mouseTimeout);
                mouseTimeout = setTimeout(() => {
                    targetOpacity = 0;
                }, 120); // وقت التلاشي عند التوقف
            });

            function updateAura() {
                // تتبع الماوس بنعومة الزبدة
                auraX += (mouseX - auraX) * 0.08;
                auraY += (mouseY - auraY) * 0.08;

                currentOpacity += (targetOpacity - currentOpacity) * 0.1;

                document.documentElement.style.setProperty('--mouse-x', `${auraX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${auraY}px`);
                document.documentElement.style.setProperty('--aura-opacity', currentOpacity);

                requestAnimationFrame(updateAura);
            }
            updateAura();
        }
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 140, "density": { "enable": true, "value_area": 900 } }, // زيادة عدد النقاط بشكل متوازن
                "color": { "value": "#00f2fe" }, // لون السايان بلو النقي
                "shape": { "type": "circle" },
                "opacity": { "value": 0.18, "random": true }, // نقاط خفيفة وغير مزعجة للعين
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 130, 
                    "color": "#00f2fe", 
                    "opacity": 0.03, // خطوط باهتة جداً وفخمة
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.4, // حركة عائمة ناعمة جداً كالزبدة
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
                    "grab": { "distance": 160, "line_linked": { "opacity": 0.2 } }
                }
            },
            "retina_detect": true
        });

        // --- محرك الهالة الإنسيابية المتقدم مع تأخير 4 ثوانٍ ---
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

                // رفع الشفافية لـ 0.4 لتكون واضحة للعين تماماً وغير مزعجة
                targetOpacity = 0.4; 
                
                clearTimeout(mouseTimeout);
                // تأخير الاختفاء لمدة 4 ثوانٍ (4000 ملي ثانية) عند توقف الماوس
                mouseTimeout = setTimeout(() => {
                    targetOpacity = 0;
                }, 4000); 
            });

            function updateAura() {
                // تتبع حركة الماوس بسلاسة تامة
                auraX += (mouseX - auraX) * 0.08;
                auraY += (mouseY - auraY) * 0.08;

                // تنعيم الترانزشن الخاص بالظهور والاختفاء
                currentOpacity += (targetOpacity - currentOpacity) * 0.05;

                document.documentElement.style.setProperty('--mouse-x', `${auraX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${auraY}px`);
                document.documentElement.style.setProperty('--aura-opacity', currentOpacity);

                requestAnimationFrame(updateAura);
            }
 UpdateAura();
        }
    }
});

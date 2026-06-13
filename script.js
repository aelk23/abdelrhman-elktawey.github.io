window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 140, "density": { "enable": true, "value_area": 900 } },
                "color": { "value": "#00f2fe" }, // لون أزرق سماوي نقي
                "shape": { "type": "circle" },
                "opacity": { "value": 0.18, "random": true },
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 220, // جعل الخطوط أطول شيء ممكن عند السحب والاتصال
                    "color": "#00f2fe", 
                    "opacity": 0.015, // تقليل شفافية الخطوط العادية لتصبح خافتة جداً وفخمة
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.4, // حركة ناعمة كالزبدة
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
                        "line_linked": { "opacity": 0.28 } // تظهر الخطوط بوضوح ممتع أثناء سحب الماوس
                    }
                }
            },
            "retina_detect": true
        });

        // --- محرك الهالة المركزة والمضيئة مع تلاشي خلال 5 ثوانٍ ---
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

                // رفع الشفافية لـ 0.65 لتكون الهالة مضيئة وواضحة جداً بمجرد الحركة
                targetOpacity = 0.65; 
                
                clearTimeout(mouseTimeout);
                // تبدأ الهالة في التلاشي والاختفاء تماماً خلال 5 ثوانٍ (5000 ملي ثانية) عند السكون
                mouseTimeout = setTimeout(() => {
                    targetOpacity = 0;
                }, 5000); 
            });

            function updateAura() {
                // تتبع مرن ونير لحركة الماوس بدون أي قفزات
                auraX += (mouseX - auraX) * 0.08;
                auraY += (mouseY - auraY) * 0.08;

                // تنعيم حركة الترانزشن والشفافية لتناسب الـ 5 ثوانٍ
                currentOpacity += (targetOpacity - currentOpacity) * 0.03;

                document.documentElement.style.setProperty('--mouse-x', `${auraX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${auraY}px`);
                document.documentElement.style.setProperty('--aura-opacity', currentOpacity);

                requestAnimationFrame(updateAura);
            }
            updateAura();
        }
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 75, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 140, 
                    "color": "#87ceeb", 
                    "opacity": 0.05, // خطوط باهتة جداً كخلفية
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.4, // حركة عائمة بطيئة جداً وناعمة
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
                    "onhover": { 
                        "enable": true, 
                        "mode": "grab" // تجاذب ناعم للخطوط
                    }
                },
                "modes": {
                    "grab": { 
                        "distance": 180, 
                        "line_linked": { "opacity": 0.25 } // تظهر الخطوط بسلاسة عند الاقتراب
                    }
                }
            },
            "retina_detect": true
        });

        // --- كود الهالة الذكية المخصصة (Custom Aura Logic) ---
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
            let lastX = 0, lastY = 0;
            let targetBlur = 0;
            let currentBlur = 0;
            let mouseTimeout;

            window.addEventListener('mousemove', (e) => {
                // حساب سرعة الحركة للتأكد من سلاسة وهج الهالة
                let distance = Math.hypot(e.clientX - lastX, e.clientY - lastY);
                lastX = e.clientX;
                lastY = e.clientY;

                // تحديث مكان الهالة في الـ CSS ديناميكياً حول مؤشر الماوس
                document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

                // تشغيل الهالة الزرقاء عند الحركة
                targetBlur = 1; 
                
                clearTimeout(mouseTimeout);
                // أول ما الماوس يقف تماماً، تختفي الهالة تدريجياً بعد 150 ملي ثانية
                mouseTimeout = setTimeout(() => {
                    targetBlur = 0;
                }, 150);
            });

            // حلقة الإنيميشن لتنعيم الـ Transition الخاص بالهالة (كأنه زبدة)
            function animateAura() {
                currentBlur += (targetBlur - currentBlur) * 0.1; // تأثير الـ Morph/Easing الناعم
                document.documentElement.style.setProperty('--aura-opacity', currentBlur);
                requestAnimationFrame(animateAura);
            }
            animateAura();
        }
    }
});

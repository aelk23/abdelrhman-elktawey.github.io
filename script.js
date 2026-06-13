window.addEventListener('DOMContentLoaded', (event) => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 75, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#87ceeb" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2, "random": true },
                "size": { "value": 1.5, "random": false },
                "line_linked": { 
                    "enable": true, 
                    "distance": 140, 
                    "color": "#87ceeb", 
                    "opacity": 0.04, // خطوط شبه مخفية تماماً للأناقة
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 0.5, // حركة عائمة ناعمة وبطيئة للجزيئات
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
                    "grab": { "distance": 180, "line_linked": { "opacity": 0.2 } }
                }
            },
            "retina_detect": true
        });

        // --- محرك الهالة الإنسيابية المتقدم (Smooth Lerp Aura) ---
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
            // الإحداثيات الفعلية للماوس
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            
            // الإحداثيات المنعمة للهالة (التي تلحق الماوس)
            let auraX = mouseX;
            let auraY = mouseY;

            let targetOpacity = 0;
            let currentOpacity = 0;
            let mouseTimeout;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                // إظهار الهالة فوراً عند بدء الحركة (بإضاءة خفيفة جداً 0.12 كحد أقصى)
                targetOpacity = 0.12; 
                
                clearTimeout(mouseTimeout);
                // عند التوقف التام، تبدأ في الاختفاء بعد 100 مللي ثانية
                mouseTimeout = setTimeout(() => {
                    targetOpacity = 0;
                }, 100);
            });

            // حلقة التحديث المستمر لضمان حركة زي الزبدة (60 إطار في الثانية)
            function updateAura() {
                // معادلة الـ Lerp للتنعيم: الهالة تتحرك بنسبة 8% فقط في كل إطار باتجاه الماوس
                auraX += (mouseX - auraX) * 0.08;
                auraY += (mouseY - auraY) * 0.08;

                // تنعيم ظهور واختفاء الشفافية
                currentOpacity += (targetOpacity - currentOpacity) * 0.1;

                // تمرير القيم لملف الـ CSS
                document.documentElement.style.setProperty('--mouse-x', `${auraX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${auraY}px`);
                document.documentElement.style.setProperty('--aura-opacity', currentOpacity);

                requestAnimationFrame(updateAura);
            }
            updateAura();
        }
    }
});

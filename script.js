/* script.js */
window.addEventListener('DOMContentLoaded', (event) => {
    // التأكد من أن مكتبة particles.js محملة
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60, // عدد النقاط
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#87ceeb" }, // لون أزرق سماوي
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.2, // شفافية النقاط نفسها
                    "random": true // لجعل بعضها أبهت من بعض
                },
                "size": {
                    "value": 1, // حجم النقاط (جعلته أصغر ما يمكن ليصبح "رؤوساً" فقط)
                    "random": false // حجم ثابت للأناقة
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#87ceeb",
                    "opacity": 0.05, // شفافية الخطوط (أقل شيء طفيف جداً كما طلبت)
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1, // حركة بطيئة وهادئة
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true, // تفعيل التفاعل عند مرور الماوس
                        "mode": "grab" // تأثير الانجذاب نحو الماوس
                    },
                    "onclick": {
                        "enable": false // إلغاء التفاعل عند الضغط
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200, // المسافة التي يتأثر بها الماوس
                        "line_linked": { "opacity": 0.15 } // تزيد شفافية الخطوط قليلاً عند الانجذاب للماوس لتأثير بصري
                    }
                }
            },
            "retina_detect": true
        });
    }
});

:root {
    --bg-color: #0a192f;
    --accent-color: #87ceeb;
    --text-color: #e6f1ff;
}

body { margin: 0; font-family: 'Segoe UI', sans-serif; background-color: var(--bg-color); color: var(--text-color); line-height: 1.6; }
#particles-js { position: fixed; width: 100%; height: 100%; z-index: -1; top: 0; left: 0; }
.container { max-width: 900px; margin: auto; padding: 20px; }

header { padding: 20px 0; display: flex; justify-content: space-between; align-items: center; }
nav ul { display: flex; list-style: none; gap: 20px; }
nav a { color: var(--text-color); text-decoration: none; font-weight: bold; }

#hero { padding: 80px 0; text-align: center; }
.highlight { color: var(--accent-color); }
.subtitle { font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; }
.description { max-width: 700px; margin: 0 auto 30px auto; color: #ccc; }

h2 { border-bottom: 2px solid var(--accent-color); display: inline-block; padding-bottom: 5px; }

.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px; }
.skill-card { background: rgba(135, 206, 235, 0.05); padding: 20px; border-radius: 10px; border: 1px solid rgba(135, 206, 235, 0.1); }
.skill-card h3 { color: var(--accent-color); margin-top: 0; }

.project-card { background: rgba(135, 206, 235, 0.05); padding: 40px; border-radius: 10px; border: 1px dashed var(--accent-color); margin-top: 20px; min-height: 150px; }

.social-links { margin-top: 20px; font-size: 1.5rem; }
.social-links a { color: var(--accent-color); }

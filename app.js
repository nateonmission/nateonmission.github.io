/* DOS Portfolio Terminal — Nathan Allen
   Replace links/projects below as needed. */

const PROFILE = {
  name: "Nathan Allen",
  location: "Mobile, Alabama",
  tagline: "Back-End Python Developer",
  summary:
    "Back-End Python Developer with experience building REST APIs and data pipelines. Shipped FastAPI services that reduced data calls 30%, improved reliability 12%, and automated reporting. Python, SQL (Postgres), AWS, Pytest.",
  links: {
    linkedin: "https://linkedin.com/in/nateonmission",
    github: "https://github.com/nateonmission",
    email: "mailto:nateonmission@gmail.com",
    phone: "tel:+18652230851"
  }
};

const SECTIONS = [
  {
    key: "about",
    title: "ABOUT.EXE",
    badge: "TAB: ABOUT",
    signal: 72,
    render: () => `
      <div><b>${escapeHtml(PROFILE.tagline)}</b> // ${escapeHtml(PROFILE.location)}</div>
      <div style="margin-top:8px;color:var(--dim)">${escapeHtml(PROFILE.summary)}</div>
      <ul>
        <li>Focus: reliable APIs, ETL/data workflows, and production-friendly tooling.</li>
        <li>Style: pragmatic, measurable improvements, calm execution.</li>
      </ul>
      <div style="margin-top:10px">
        Links:
        <a href="${PROFILE.links.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a> •
        <a href="${PROFILE.links.github}" target="_blank" rel="noreferrer">GitHub</a> •
        <a href="${PROFILE.links.email}">Email</a>
      </div>
    `
  },
  {
    key: "skills",
    title: "SKILLS.DAT",
    badge: "TAB: SKILLS",
    signal: 66,
    render: () => `
      <div><b>Back-End:</b> Python, FastAPI, Flask, Django, REST APIs, Pytest, SQLAlchemy/Pydantic</div>
      <div style="margin-top:6px"><b>Data:</b> SQL, Postgres, MySQL, MongoDB, Pandas, NumPy, Jupyter, Web Scraping</div>
      <div style="margin-top:6px"><b>Cloud/DevOps:</b> AWS (S3, EC2, CloudWatch, Lambda, API Gateway, Route 53, RDS, DynamoDB), Docker, Git</div>
      <div style="margin-top:6px"><b>Web:</b> HTML, CSS, JavaScript (plus Vue / Angular experience)</div>
      <ul>
        <li>Preferred working mode: small, testable modules; visible metrics; production guardrails.</li>
        <li>Comfortable bridging “data + backend + ops” to ship features end-to-end.</li>
      </ul>
    `
  },
  {
    key: "experience",
    title: "EXPERIENCE.LOG",
    badge: "TAB: XP",
    signal: 82,
    render: () => `
      <div><b>Developer — Allen Data Services</b> <span style="color:var(--dim)">(Mar 2024 – Current)</span></div>
      <ul>
        <li>Built & deployed Python web services for small-business clients with SQL + AWS-hosted infrastructure.</li>
        <li>Designed relational schemas and SQL queries for reporting and workflows.</li>
        <li>Provided production troubleshooting and backend support; improved reliability.</li>
      </ul>

      <div style="margin-top:10px"><b>Developer — Directions Research</b> <span style="color:var(--dim)">(May 2022 – Feb 2024)</span></div>
      <ul>
        <li>Migrated a Jupyter workflow into a RESTful FastAPI backend; reduced database/S3 calls by ~30%.</li>
        <li>Improved ingestion reliability ~12% via monitoring/alerting with AWS CloudWatch.</li>
        <li>Maintained ETL pipelines for JSON/SQL/CSV; lowered downtime by ~13 hours/month.</li>
        <li>Automated large dataset exports to Excel; saved analysts ~8 hours per workbook.</li>
      </ul>

      <div style="margin-top:10px"><b>Technical Support Specialist — Charter Communications</b> <span style="color:var(--dim)">(Jun 2005 – Nov 2021)</span></div>
      <ul>
        <li>Troubleshot business customer issues; reduced downtime and improved satisfaction scores.</li>
        <li>Resolved 40+ complex network/data issues monthly through root-cause analysis.</li>
        <li>Authored 200+ troubleshooting documents; improved team efficiency.</li>
      </ul>
    `
  },
  {
    key: "projects",
    title: "PROJECTS.DIR",
    badge: "TAB: PROJECTS",
    signal: 60,
    render: () => `
      <div style="color:var(--dim)">Replace these with your real projects (or link to GitHub repos).</div>
      <ul>
        <li><b>FastAPI Service Template</b> — auth, health checks, structured logging, pytest. <a href="${PROFILE.links.github}" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><b>ETL Pipeline Toolkit</b> — CSV/JSON ingestion, validation, Postgres load, reporting output.</li>
        <li><b>AWS Observability Pack</b> — CloudWatch alarms/dashboards, incident notes, runbooks.</li>
      </ul>
      <div style="margin-top:10px">
        <b>TODO:</b> Paste 3–5 repo links, rewrite this section with stronger outcomes + tech bullets.
      </div>
    `
  },
  {
    key: "contact",
    title: "CONTACT.COM",
    badge: "TAB: CONTACT",
    signal: 70,
    render: () => `
      <div><b>Email:</b> <a href="${PROFILE.links.email}">nateonmission@gmail.com</a></div>
      <div style="margin-top:6px"><b>Phone:</b> <a href="${PROFILE.links.phone}">(865) 223-0851</a></div>
      <div style="margin-top:6px"><b>LinkedIn:</b> <a href="${PROFILE.links.linkedin}" target="_blank" rel="noreferrer">${PROFILE.links.linkedin}</a></div>
      <div style="margin-top:6px"><b>GitHub:</b> <a href="${PROFILE.links.github}" target="_blank" rel="noreferrer">${PROFILE.links.github}</a></div>
      <ul>
        <li>Want a printable resume button? Add <code>resume.pdf</code> to your site root and I’ll wire it in.</li>
      </ul>
    `
  }
];

const BOOT_LINES = [
  { t: "NATE BIOS v1.0 (C) 1996–2026", c: "ok" },
  { t: "Memory Check: 640K OK (and ambition unlimited)", c: "ok" },
  { t: "Detecting Stack ............ Python/SQL/AWS OK", c: "ok" },
  { t: "Initializing FastAPI ................. OK", c: "ok" },
  { t: "Loading Observability (CloudWatch) ... OK", c: "ok" },
  { t: "Mounting Projects.DIR ................. OK", c: "ok" },
  { t: "Warning: Outcome-driven bullets detected.", c: "warn" },
  { t: "Type HELP for commands.", c: "hot" }
];

const MARQUEE = [
  "TIP: Make it measurable. Latency, cost, reliability—pick a scoreboard.",
  "PRO MOVE: Add a /health endpoint and real alerts before you ship.",
  "Remember: Tests are time machines. Use them.",
  "CI/CD: small changes, frequent merges, fewer Friday surprises.",
  "Logs are stories. Make them readable under pressure.",
  "If it’s not monitored, it’s not production."
];

// ---------- DOM ----------
const bootEl = document.getElementById("boot");
const menuEl = document.getElementById("menu");
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");
const locEl = document.getElementById("loc");
const stackEl = document.getElementById("stack");
const sectionTitle = document.getElementById("sectionTitle");
const sectionBadge = document.getElementById("sectionBadge");
const contentEl = document.getElementById("content");
const signalBar = document.getElementById("signalBar");

const cmdLog = document.getElementById("cmdLog");
const cmdInput = document.getElementById("cmdInput");

const marqueeText = document.getElementById("marqueeText");
const soundStatus = document.getElementById("soundStatus");
const toggleSoundBtn = document.getElementById("toggleSound");
const glitchBtn = document.getElementById("glitchBtn");
const resetBtn = document.getElementById("resetBtn");

// ---------- Sound ----------
let soundOn = true;
let audioCtx = null;

function ensureAudio(){
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
function beep(freq=880, dur=0.05, type="square", vol=0.035){
  if (!soundOn) return;
  ensureAudio();
  const t0 = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(t0); o.stop(t0 + dur);
}
function blip(){
  beep(740, 0.04, "square", 0.03);
  setTimeout(()=>beep(980, 0.04, "square", 0.025), 45);
}

// ---------- Helpers ----------
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}
function logCmd(line, cls=""){
  const div = document.createElement("div");
  div.innerHTML = cls ? `<span class="${cls}">${escapeHtml(line)}</span>` : escapeHtml(line);
  cmdLog.appendChild(div);
  cmdLog.scrollTop = cmdLog.scrollHeight;
}
function setMarquee(){
  const pick = MARQUEE[Math.floor(Math.random()*MARQUEE.length)];
  marqueeText.textContent = pick + "  •  " + pick;
}

// ---------- Render ----------
let selectedIndex = 0;

function renderMenu(){
  menuEl.innerHTML = "";
  SECTIONS.forEach((s, i)=>{
    const item = document.createElement("div");
    item.className = "menuItem";
    item.tabIndex = 0;
    item.innerHTML = `
      <div class="sel">${i===0 ? "►" : " "}</div>
      <div class="menuText">
        <div class="name">${escapeHtml(s.title)}</div>
        <div class="desc">${escapeHtml(s.badge)} • SIGNAL ${s.signal}%</div>
      </div>
    `;
    item.addEventListener("click", ()=>selectSection(i));
    item.addEventListener("keydown", (e)=>{
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectSection(i); }
    });
    menuEl.appendChild(item);
  });
}

function selectSection(index){
  const s = SECTIONS[index];
  if (!s) return;
  selectedIndex = index;

  [...menuEl.querySelectorAll(".menuItem")].forEach((el,i)=>{
    el.querySelector(".sel").textContent = (i===index) ? "►" : " ";
  });

  sectionTitle.textContent = s.title;
  sectionBadge.textContent = s.badge;
  signalBar.style.width = Math.max(10, Math.min(100, s.signal)) + "%";
  contentEl.innerHTML = s.render();

  blip();
  logCmd(`Opened: ${s.title}`);
}

async function runBoot(){
  bootEl.innerHTML = "";
  for (const L of BOOT_LINES){
    const div = document.createElement("div");
    div.className = "line";
    div.innerHTML = `<span class="${L.c}">${escapeHtml(L.t)}</span>`;
    bootEl.appendChild(div);

    await new Promise(r=>setTimeout(r, 170));
    div.classList.add("show");

    if (L.c === "warn") beep(220, 0.05, "sawtooth", 0.02);
    else beep(660, 0.03, "square", 0.02);
  }
}

// ---------- Command Parser ----------
function handleCommand(raw){
  const input = raw.trim();
  if (!input) return;

  logCmd(`C:\\NATE> ${input}`, "ok");
  const [cmd, ...rest] = input.split(/\s+/);
  const c = cmd.toLowerCase();
  const arg = rest.join(" ").trim().toLowerCase();

  if (c === "help" || c === "?"){
    logCmd("Commands:", "hot");
    logCmd("  help                 - show this list");
    logCmd("  dir                  - list sections");
    logCmd("  open <about|skills|experience|projects|contact>");
    logCmd("  open github|linkedin - open profile links");
    logCmd("  email                - open email client");
    logCmd("  theme green|amber|ice");
    logCmd("  sound on|off         - toggle beeps");
    logCmd("  glitch               - screen glitch");
    logCmd("  cls                  - clear command log");
    logCmd("  ver                  - show 'DOS' version");
    return;
  }

  if (c === "dir"){
    logCmd(" Directory of C:\\NATE", "hot");
    SECTIONS.forEach(s => logCmd(`  ${s.key.toUpperCase().padEnd(12," ")}  ${s.title}`));
    logCmd(`  ${String(SECTIONS.length).padStart(2," ")} file(s)`);
    return;
  }

  if (c === "open"){
    // open section
    const secIdx = SECTIONS.findIndex(s => s.key === arg || s.title.toLowerCase().includes(arg));
    if (secIdx >= 0){
      selectSection(secIdx);
      return;
    }

    // open links
    if (arg === "github") { window.open(PROFILE.links.github, "_blank"); logCmd("Opened GitHub.", "hot"); blip(); return; }
    if (arg === "linkedin") { window.open(PROFILE.links.linkedin, "_blank"); logCmd("Opened LinkedIn.", "hot"); blip(); return; }

    logCmd("Usage: open about|skills|experience|projects|contact OR open github|linkedin", "warn");
    return;
  }

  if (c === "email"){
    window.location.href = PROFILE.links.email;
    logCmd("Launching email client…", "hot");
    blip();
    return;
  }

  if (c === "theme"){
    if (!arg) { logCmd("Usage: theme green|amber|ice", "warn"); return; }
    const theme = ["green","amber","ice"].includes(arg) ? arg : null;
    if (!theme){ logCmd("Unknown theme. Use: green | amber | ice", "warn"); return; }
    document.documentElement.setAttribute("data-theme", theme === "green" ? "" : theme);
    logCmd(`Theme set: ${theme.toUpperCase()}`, "hot");
    blip();
    return;
  }

  if (c === "sound"){
    if (arg === "on"){ soundOn = true; soundStatus.textContent = "ON"; blip(); logCmd("Sound: ON", "ok"); return; }
    if (arg === "off"){ soundOn = false; soundStatus.textContent = "OFF"; logCmd("Sound: OFF", "warn"); return; }
    logCmd("Usage: sound on | sound off", "warn");
    return;
  }

  if (c === "glitch"){
    glitch();
    return;
  }

  if (c === "cls"){
    cmdLog.innerHTML = "";
    beep(400, 0.03);
    return;
  }

  if (c === "ver"){
    logCmd("MS-DOS Version 6.22 (portfolio edition)", "hot");
    beep(600, 0.03);
    return;
  }

  beep(200, 0.08, "square", 0.02);
  logCmd(`Bad command or file name: ${cmd}`, "warn");
  logCmd("Type HELP for a list of commands.", "ok");
}

// ---------- Glitch ----------
function glitch(){
  const screen = document.querySelector(".screen");
  screen.style.transition = "none";
  const steps = 10;
  let i = 0;
  const interval = setInterval(()=>{
    i++;
    const x = (Math.random() - 0.5) * 6;
    const y = (Math.random() - 0.5) * 3;
    const r = (Math.random() - 0.5) * 1.8;
    screen.style.transform = `perspective(900px) rotateX(1.2deg) translate(${x}px, ${y}px) rotate(${r}deg)`;
    if (soundOn) beep(200 + Math.random()*1400, 0.02, "square", 0.02);
    if (i >= steps){
      clearInterval(interval);
      screen.style.transition = "transform .15s ease";
      screen.style.transform = "perspective(900px) rotateX(1.2deg)";
    }
  }, 40);
}

function reset(){
  selectedIndex = 0;
  selectSection(0);
  cmdLog.innerHTML = "";
  setMarquee();
  runBoot();
  logCmd("System reset complete.", "hot");
}

// ---------- Init ----------
(function init(){
  heroTitle.textContent = PROFILE.name;
  heroSub.textContent = PROFILE.summary;
  locEl.textContent = PROFILE.location;
  stackEl.textContent = "Python • SQL • AWS";

  renderMenu();
  selectSection(0);
  setMarquee();
  runBoot();

  setInterval(setMarquee, 16000);

  window.addEventListener("keydown", (e)=>{
    const typing = document.activeElement && document.activeElement.tagName === "INPUT";
    if (typing) return;

    if (e.key === "ArrowUp"){ e.preventDefault(); moveSelection(-1); }
    if (e.key === "ArrowDown"){ e.preventDefault(); moveSelection(1); }
    if (e.key === "Enter"){ e.preventDefault(); selectSection(selectedIndex); }
  });

  cmdInput.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
      const v = cmdInput.value;
      cmdInput.value = "";
      handleCommand(v);
    }
  });

  toggleSoundBtn.addEventListener("click", ()=>{
    soundOn = !soundOn;
    soundStatus.textContent = soundOn ? "ON" : "OFF";
    if (soundOn) blip();
  });

  glitchBtn.addEventListener("click", glitch);
  resetBtn.addEventListener("click", reset);

  logCmd("Portfolio terminal initialized.", "hot");
  logCmd("Type HELP to begin. Or use ↑/↓ + Enter to navigate.");
})();

function moveSelection(delta){
  selectedIndex = (selectedIndex + delta + SECTIONS.length) % SECTIONS.length;
  selectSection(selectedIndex);
  const items = [...menuEl.querySelectorAll(".menuItem")];
  items[selectedIndex]?.scrollIntoView({block:"nearest", behavior:"smooth"});
}
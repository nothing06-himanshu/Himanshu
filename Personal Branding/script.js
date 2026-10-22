/* =====================================================================
   EDIT THIS SECTION ONLY — everything on the site comes from CONFIG.
   ===================================================================== */
const CONFIG = {
  name: "Your Name",
  tagline: "My Digital Space — Documents, Resources & Connections.",
  intro: "Welcome! This is where I keep my documents, favourite resources and links to my profiles, all in one place.",
  photo: "",                       // e.g. "images/me.jpg". Leave "" to show your initials.
  email: "you@example.com",
  about: "Write a few sentences about who you are, what you do and what you care about.",
  skills: ["Writing", "Research", "Web basics", "Teaching"],
  projects: ["Project one: short description", "Project two: short description"],
  goals: ["Goal one", "Goal two"],

  // Leave a url as "" to hide that social card's link (it shows as "not set").
  social: [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/your-username" },
    { name: "Facebook",  icon: "facebook",  url: "https://facebook.com/your-username" },
    { name: "YouTube",   icon: "youtube",   url: "https://youtube.com/@your-channel" },
    { name: "LinkedIn",  icon: "linkedin",  url: "https://linkedin.com/in/your-username" },
    { name: "GitHub",    icon: "github",    url: "https://github.com/your-username" },
    { name: "Email",     icon: "mail",      url: "mailto:you@example.com" }
  ],

  // type: "pdf" | "docx" | "xlsx" | "pptx" | "other"
  // url: paste a Google Drive / OneDrive / Dropbox share link. Leave "" if not ready yet.
  documents: [
    { title: "Sample Study Guide",   description: "Placeholder: summary notes for a course.",        category: "Study Materials",     type: "pdf",  url: "", updated: "2026-01-15" },
    { title: "Sample ID Copy",       description: "Placeholder: restricted file, access on request.", category: "Important Documents", type: "pdf",  url: "", updated: "2026-02-01" },
    { title: "Sample Project Report",description: "Placeholder: a project write-up.",                category: "Projects",            type: "docx", url: "", updated: "2026-03-10" },
    { title: "Sample Tutorial Notes",description: "Placeholder: step-by-step notes.",                category: "Notes & Tutorials",   type: "docx", url: "", updated: "2026-04-02" },
    { title: "Sample Budget Sheet",  description: "Placeholder: a simple spreadsheet.",              category: "Useful Resources",    type: "xlsx", url: "", updated: "2026-05-20" },
    { title: "Sample Slide Deck",    description: "Placeholder: presentation slides.",               category: "Other Documents",     type: "pptx", url: "", updated: "2026-06-05" }
  ],

  links: [
    { title: "Google Drive", description: "Cloud storage and sharing.",     url: "https://drive.google.com" },
    { title: "Canva",        description: "Quick design and graphics.",     url: "https://www.canva.com" },
    { title: "Wikipedia",    description: "Fast background reading.",       url: "https://www.wikipedia.org" },
    { title: "Google Scholar",description: "Search academic papers.",       url: "https://scholar.google.com" }
  ]
};
/* ===================== END OF EDITABLE SECTION ===================== */

const $ = (s, el = document) => el.querySelector(s);
const ICONS = {
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="m9.75 15.02 5.75-3.27-5.75-3.27z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.link}</svg>`;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const validUrl = u => /^(https?:|mailto:)/i.test((u || "").trim());
const fmtDate = d => { const x = new Date(d); return isNaN(x) ? "" : x.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }); };

/* ---------- Static content ---------- */
document.title = `${CONFIG.name} | Digital Space`;
$("#brandName").textContent = $("#heroName").textContent = $("#footBrand").textContent = CONFIG.name;
$("#tagline").textContent = CONFIG.tagline;
$("#heroIntro").textContent = CONFIG.intro;
$("#aboutText").textContent = CONFIG.about;
$("#skills").innerHTML = CONFIG.skills.map(s => `<li>${esc(s)}</li>`).join("");
$("#projects").innerHTML = CONFIG.projects.map(s => `<li>${esc(s)}</li>`).join("");
$("#goals").innerHTML = CONFIG.goals.map(s => `<li>${esc(s)}</li>`).join("");
$("#mailBtn").href = `mailto:${CONFIG.email}`;
$("#copy").textContent = `© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.`;
$("#initials").textContent = CONFIG.name.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
if (CONFIG.photo) { const p = $("#photo"); p.src = CONFIG.photo; p.hidden = false; $("#initials").hidden = true; }

/* ---------- Social ---------- */
$("#socialGrid").innerHTML = CONFIG.social.map(s => validUrl(s.url)
  ? `<a class="card s tilt" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${svg(s.icon)}<span>${esc(s.name)}</span></a>`
  : `<div class="card s" aria-disabled="true">${svg(s.icon)}<span>${esc(s.name)}</span><small>Not set</small></div>`).join("");
$("#footSocial").innerHTML = CONFIG.social.filter(s => validUrl(s.url))
  .map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.name)}">${svg(s.icon)}</a>`).join("");

/* ---------- Useful links ---------- */
$("#linkGrid").innerHTML = CONFIG.links.map(l => `
  <a class="card l tilt" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">
    <div class="top"><span class="ft link">${svg("link")}</span><h3>${esc(l.title)}</h3></div>
    <p>${esc(l.description)}</p></a>`).join("");

/* ---------- Document library ---------- */
const cats = ["All", ...new Set(CONFIG.documents.map(d => d.category))];
let activeCat = "All";
const chips = $("#chips");
chips.innerHTML = cats.map(c => `<button class="chip" type="button" aria-pressed="${c === "All"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
chips.addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  activeCat = b.dataset.c;
  chips.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderDocs();
});
$("#q").addEventListener("input", renderDocs);

function renderDocs() {
  const q = $("#q").value.trim().toLowerCase();
  const list = CONFIG.documents.filter(d => (activeCat === "All" || d.category === activeCat) && d.title.toLowerCase().includes(q));
  $("#docGrid").innerHTML = list.map(d => {
    const t = (d.type || "other").toLowerCase(), ok = validUrl(d.url);
    const badge = ["pdf", "docx", "xlsx", "pptx"].includes(t) ? `<span class="ft ${t}">${t.toUpperCase()}</span>` : `<span class="ft">${svg("file")}</span>`;
    const date = fmtDate(d.updated);
    return `<article class="card tilt">
      <div class="top">${badge}<h3>${esc(d.title)}</h3></div>
      <p>${esc(d.description)}</p>
      <div class="meta"><span class="cat">${esc(d.category)}</span>${date ? `<span>Updated ${date}</span>` : ""}</div>
      ${ok ? `<a class="btn primary" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer">Open Document</a>`
           : `<span class="btn" aria-disabled="true" role="link">Link unavailable</span><span class="note">This link hasn’t been added yet.</span>`}
    </article>`;
  }).join("");
  $("#docEmpty").hidden = list.length > 0;
  $("#count").textContent = `${list.length} of ${CONFIG.documents.length} documents`;
}
renderDocs();

/* ---------- Mobile menu ---------- */
const burger = $("#burger"), menu = $("#menu");
const setMenu = open => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => e.target.tagName === "A" && setMenu(false));
document.addEventListener("keydown", e => e.key === "Escape" && setMenu(false));

/* ---------- Subtle 3D tilt (mouse only, off for reduced motion) ---------- */
const canTilt = matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches;
if (canTilt) {
  document.addEventListener("pointermove", e => {
    const el = e.target.closest?.(".tilt"); if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(800px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateZ(0)`;
  });
  document.addEventListener("pointerout", e => { const el = e.target.closest?.(".tilt"); if (el) el.style.transform = ""; });
}

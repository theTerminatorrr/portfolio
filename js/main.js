(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------
     RENDER CONTENT FROM config.js
  ---------------------------------------------------------------- */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function renderHero() {
    setText("heroEyebrow", data.role);
    setText("heroName", data.name);
    setText("heroFocus", data.focus);
    setText("heroTagline", data.tagline);
    const gh = document.getElementById("heroGithub");
    if (gh && data.socials && data.socials.github) gh.href = data.socials.github;
  }

  function renderAbout() {
    const img = document.getElementById("avatarImg");
    if (img && data.avatar) {
      img.src = data.avatar;
      img.alt = `Portrait of ${data.name || "the site owner"}`;
    }
    const wrap = document.getElementById("aboutText");
    if (wrap && Array.isArray(data.about)) {
      wrap.innerHTML = data.about.map(p => `<p>${escapeHTML(p)}</p>`).join("");
    }
  }

  function renderSkills() {
    const wrap = document.getElementById("skillsGroups");
    if (!wrap || !Array.isArray(data.skills)) return;
    wrap.innerHTML = data.skills.map(group => `
      <div class="skills__group reveal">
        <p class="skills__group-title">${escapeHTML(group.group)}</p>
        <div class="skills__tags">
          ${group.items.map(item => `<span class="tag">${escapeHTML(item)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderEducation() {
    const wrap = document.getElementById("timeline");
    if (!wrap || !Array.isArray(data.education)) return;
    wrap.innerHTML = data.education.map(item => `
      <li class="timeline__item reveal${item.current ? " timeline__item--current" : ""}">
        <p class="timeline__degree">
          ${escapeHTML(item.degree)}
          ${item.current ? '<span class="badge">In progress</span>' : ""}
        </p>
        <p class="timeline__institute">${escapeHTML(item.institute)}</p>
        <p class="timeline__detail">${escapeHTML(item.detail)}</p>
      </li>
    `).join("");
  }

  function renderProjects() {
    const wrap = document.getElementById("projectsGrid");
    if (!wrap) return;

    if (!Array.isArray(data.projects) || data.projects.length === 0) {
      const ghUrl = (data.socials && data.socials.github) || "#";
      wrap.innerHTML = `
        <div class="projects__empty reveal">
          <p>New project write-ups are on their way. In the meantime, the code itself is on GitHub.</p>
          <a href="${escapeAttr(ghUrl)}" class="btn btn--ghost" target="_blank" rel="noopener">Browse GitHub ↗</a>
        </div>
      `;
      return;
    }

    wrap.innerHTML = data.projects.map(p => `
      <div class="project-card reveal">
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.description)}</p>
        ${Array.isArray(p.stack) ? `
          <div class="project-card__stack">
            ${p.stack.map(s => `<span>${escapeHTML(s)}</span>`).join("")}
          </div>` : ""}
        ${p.link ? `<a class="project-card__link" href="${escapeAttr(p.link)}" target="_blank" rel="noopener">View project ↗</a>` : ""}
      </div>
    `).join("");
  }

  function renderContact() {
    const emailLink = document.getElementById("emailLink");
    if (emailLink && data.email) {
      emailLink.href = `mailto:${data.email}`;
      emailLink.textContent = data.email;
    }

    const socialsWrap = document.getElementById("socials");
    if (socialsWrap && data.socials) {
      const icons = {
        github: `<svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.77.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.6.23 1.04.5 1.5.96.46.46.73.9.96 1.5.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.23.6-.5 1.04-.96 1.5-.46.46-.9.73-1.5.96-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.02 4.02 0 0 1-1.5-.96 4.02 4.02 0 0 1-.96-1.5c-.16-.46-.35-1.26-.4-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.23-.6.5-1.04.96-1.5.46-.46.9-.73 1.5-.96.46-.16 1.26-.35 2.43-.4C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.48.72-2.15 1.39-.67.67-1.08 1.35-1.39 2.15-.3.76-.5 1.64-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.39 2.15.67.67 1.35 1.08 2.15 1.39.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.72 2.15-1.39.67-.67 1.08-1.35 1.39-2.15.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.39-2.15A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>`
      };
      socialsWrap.innerHTML = Object.entries(data.socials)
        .filter(([key, url]) => url && icons[key])
        .map(([key, url]) => `
          <a href="${escapeAttr(url)}" target="_blank" rel="noopener" aria-label="${escapeAttr(key)}">
            ${icons[key]}
          </a>
        `).join("");
    }
  }

  function renderFooter() {
    setText("footerName", data.name);
    setText("year", String(new Date().getFullYear()));
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  /* ----------------------------------------------------------------
     NAV TOGGLE (mobile)
  ---------------------------------------------------------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------------
     SCROLL REVEAL
  ---------------------------------------------------------------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => observer.observe(el));
  }

  /* ----------------------------------------------------------------
     AMBIENT NEURAL-NETWORK CANVAS
     A field of drifting nodes connected by faint lines, with the
     occasional signal pulse traveling along an edge — a nod to the
     subject's own field (ML/neural networks) rather than a generic
     gradient blob.
  ---------------------------------------------------------------- */
  function initCanvas() {
    const canvas = document.getElementById("net-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    let nodes = [];
    let pulses = [];
    let rafId;

    const LINK_DIST = 150;
    const NODE_COUNT_DIVISOR = 14000; // lower = more nodes

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    }

    function seedNodes() {
      const count = Math.max(24, Math.min(70, Math.floor((w * h) / NODE_COUNT_DIVISOR)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6
      }));
    }

    function maybeSpawnPulse() {
      if (Math.random() > 0.985 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const candidates = nodes.filter(n => n !== a && dist(a, n) < LINK_DIST);
        if (candidates.length) {
          const b = candidates[Math.floor(Math.random() * candidates.length)];
          pulses.push({ a, b, t: 0 });
        }
      }
    }

    function dist(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      // update nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.18;
            ctx.strokeStyle = `rgba(111, 177, 224, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes themselves
      nodes.forEach(n => {
        ctx.fillStyle = "rgba(201, 169, 97, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // pulses (signal traveling along an edge)
      maybeSpawnPulse();
      pulses.forEach(p => {
        p.t += 0.012;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = "rgba(227, 205, 149, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
      pulses = pulses.filter(p => p.t < 1);

      rafId = requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    resize();

    if (reduceMotion) {
      // draw a single static frame: nodes + links, no motion loop
      step();
      cancelAnimationFrame(rafId);
    } else {
      step();
    }
  }

  /* ----------------------------------------------------------------
     INIT
  ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderEducation();
    renderProjects();
    renderContact();
    renderFooter();
    initNav();
    initReveal();
    initCanvas();
  });
})();

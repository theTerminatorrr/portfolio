(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ----------------------------------------------------------------
     UTILITIES
  ---------------------------------------------------------------- */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null && value !== "") el.textContent = value;
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

  const SOCIAL_ICONS = {
    github: `<svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.77.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.6.23 1.04.5 1.5.96.46.46.73.9.96 1.5.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.23.6-.5 1.04-.96 1.5-.46.46-.9.73-1.5.96-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.02 4.02 0 0 1-1.5-.96 4.02 4.02 0 0 1-.96-1.5c-.16-.46-.35-1.26-.4-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.23-.6.5-1.04.96-1.5.46-.46.9-.73 1.5-.96.46-.16 1.26-.35 2.43-.4C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.48.72-2.15 1.39-.67.67-1.08 1.35-1.39 2.15-.3.76-.5 1.64-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.39 2.15.67.67 1.35 1.08 2.15 1.39.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.72 2.15-1.39.67-.67 1.08-1.35 1.39-2.15.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.39-2.15A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>`,
    scholar: `<svg viewBox="0 0 24 24"><path d="M12 1L0 9l4 2.5V19l8 4 8-4v-7.5L24 9 12 1zm0 2.4L20.2 9 12 14.6 3.8 9 12 3.4zM6 12.9l6 3.75 6-3.75V17l-6 3-6-3v-4.1z"/></svg>`,
    orcid: `<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM7.4 4.9c.8 0 1.4.6 1.4 1.4S8.2 7.7 7.4 7.7 6 7.1 6 6.3s.6-1.4 1.4-1.4zM6.5 9.4h1.8v9.7H6.5V9.4zm3.7 0h3.8c3.6 0 5.3 2.6 5.3 4.9 0 2.5-2 4.9-5.3 4.9h-3.8V9.4zm1.8 1.6v6.6h1.8c2.6 0 3.6-1.9 3.6-3.3 0-1.8-1.1-3.3-3.7-3.3h-1.7z"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1.4 2L12 12.5 20.6 6H3.4zM3 8.2V18h18V8.2l-8.4 6.6a1 1 0 0 1-1.2 0L3 8.2z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.18-1.36A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.13l-.3-.18-3.07.8.82-2.99-.2-.31A8 8 0 1 1 12 20zm4.1-5.9c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11s-.57.71-.7.86c-.13.15-.26.17-.48.06a6.5 6.5 0 0 1-1.92-1.18 7.2 7.2 0 0 1-1.33-1.65c-.14-.24 0-.37.1-.49.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.57 2.4 3.8 3.36.53.23.94.36 1.26.46.53.17 1.01.15 1.39.09.43-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.06-.09-.2-.15-.42-.26z"/></svg>`,
  };

  function renderSocialIcons(containerId, includeEmail) {
    const wrap = document.getElementById(containerId);
    if (!wrap || !data.socials) return;
    const entries = Object.entries(data.socials).filter(([key, url]) => url && SOCIAL_ICONS[key]);
    if (includeEmail && data.email) entries.push(["email", `mailto:${data.email}`]);
    if (!entries.length) {
      wrap.style.display = "none";
      return;
    }
    wrap.innerHTML = entries
      .map(
        ([key, url]) => `
        <a href="${escapeAttr(url)}" ${key === "email" ? "" : 'target="_blank" rel="noopener"'} aria-label="${escapeAttr(key)}" class="social-icon">
          ${SOCIAL_ICONS[key]}
        </a>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — HERO
  ---------------------------------------------------------------- */
  function renderHero() {
    setText("heroEyebrow", data.role);
    setText("heroName", data.name);
    setText("heroFocus", data.focus);
    setText("heroTagline", data.tagline);
    renderSocialIcons("heroSocials", false);

    const githubBtn = document.getElementById("heroGithubBtn");
    if (githubBtn) {
      const gh = data.socials && data.socials.github;
      if (gh) {
        githubBtn.href = gh;
        githubBtn.removeAttribute("hidden");
      } else {
        githubBtn.setAttribute("hidden", "");
      }
    }

    const resumeBtn = document.getElementById("resumeBtn");
    if (resumeBtn) {
      if (data.resume) {
        resumeBtn.href = data.resume;
        resumeBtn.removeAttribute("hidden");
      } else {
        resumeBtn.setAttribute("hidden", "");
      }
    }

    document.querySelectorAll("[data-brand-name]").forEach(el => {
      if (data.name) el.textContent = data.name;
    });
  }

  /* ----------------------------------------------------------------
     RENDER — ABOUT
  ---------------------------------------------------------------- */
  function renderAbout() {
    const frame = document.getElementById("avatarFrame");
    const img = document.getElementById("avatarImg");
    if (data.avatar && img) {
      img.src = data.avatar;
      img.alt = `Portrait of ${data.name || "the site owner"}`;
      img.style.display = "block";
      if (frame) frame.classList.remove("avatar-frame--empty");
    } else if (frame) {
      frame.classList.add("avatar-frame--empty");
    }

    const wrap = document.getElementById("aboutText");
    if (wrap && Array.isArray(data.about)) {
      wrap.innerHTML = data.about.map(p => `<p class="reveal">${escapeHTML(p)}</p>`).join("");
    }
  }

  /* ----------------------------------------------------------------
     RENDER — SKILLS
  ---------------------------------------------------------------- */
  function renderTagContent(item) {
    const isObj = typeof item === "object" && item !== null;
    const name = isObj ? item.name : item;
    let iconHtml = "";
    if (isObj && item.icon === "emoji" && item.emoji) {
      iconHtml = `<span class="tag__emoji">${item.emoji}</span>`;
    } else if (isObj && item.icon) {
      iconHtml = `<i class="${escapeHTML(item.icon)} tag__icon"></i>`;
    } else if (isObj && item.emoji) {
      iconHtml = `<span class="tag__emoji">${item.emoji}</span>`;
    }
    return `${iconHtml}${escapeHTML(name)}`;
  }

  function renderSkills() {
    const wrap = document.getElementById("skillsGroups");
    if (!wrap || !Array.isArray(data.skills)) return;
    wrap.innerHTML = data.skills
      .map(
        group => `
      <div class="skills__group reveal">
        <p class="skills__group-title">${escapeHTML(group.group)}</p>
        <div class="skills__tags">
          ${group.items.map(item => `<span class="tag">${renderTagContent(item)}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — EXPERIENCE (timeline / empty state)
  ---------------------------------------------------------------- */
  function renderExperience() {
    const wrap = document.getElementById("experienceList");
    if (!wrap) return;
    if (!Array.isArray(data.experience) || data.experience.length === 0) {
      wrap.innerHTML = `
        <div class="empty-state reveal">
          <p>Currently building experience through academic projects, independent learning, and research-oriented work.</p>
        </div>`;
      return;
    }
    wrap.innerHTML = data.experience
      .map(
        item => `
      <li class="timeline__item reveal${item.current ? " timeline__item--current" : ""}">
        <p class="timeline__degree">${escapeHTML(item.role)} ${item.current ? '<span class="badge">Ongoing</span>' : ""}</p>
        <p class="timeline__institute">${escapeHTML(item.org)}${item.period ? " · " + escapeHTML(item.period) : ""}</p>
        <p class="timeline__detail">${escapeHTML(item.description || "")}</p>
      </li>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — PROJECTS
  ---------------------------------------------------------------- */
  function renderProjects() {
    const wrap = document.getElementById("projectsGrid");
    if (!wrap) return;

    if (!Array.isArray(data.projects) || data.projects.length === 0) {
      const ghUrl = (data.socials && data.socials.github) || "";
      wrap.innerHTML = `
        <div class="empty-state empty-state--wide reveal">
          <p>Project write-ups are on their way. In the meantime, the code lives on GitHub.</p>
          ${ghUrl ? `<a href="${escapeAttr(ghUrl)}" class="btn btn--ghost" target="_blank" rel="noopener">Browse GitHub ↗</a>` : ""}
        </div>`;
      return;
    }

    wrap.innerHTML = data.projects
      .map(
        p => `
      <article class="project-card reveal">
        ${p.image ? `<div class="project-card__media"><img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)} preview" loading="lazy" /></div>` : ""}
        <div class="project-card__body">
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.description)}</p>
          ${Array.isArray(p.stack)
            ? `<div class="project-card__stack">${p.stack.map(s => `<span>${escapeHTML(s)}</span>`).join("")}</div>`
            : ""
          }
          <div class="project-card__links">
            ${p.github ? `<a href="${escapeAttr(p.github)}" target="_blank" rel="noopener">Code ↗</a>` : ""}
            ${p.link ? `<a href="${escapeAttr(p.link)}" target="_blank" rel="noopener">Live ↗</a>` : ""}
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — RESEARCH
  ---------------------------------------------------------------- */
  function renderResearch() {
    const interestsWrap = document.getElementById("researchInterests");
    if (interestsWrap && Array.isArray(data.researchInterests)) {
      interestsWrap.innerHTML = data.researchInterests
        .map(i => `<span class="tag tag--outline reveal">${renderTagContent(i)}</span>`)
        .join("");
    }

    const pubWrap = document.getElementById("publicationsList");
    if (!pubWrap) return;
    if (!Array.isArray(data.publications) || data.publications.length === 0) {
      pubWrap.innerHTML = `
        <div class="empty-state reveal">
          <p>Currently exploring research opportunities and working toward contributing to the scientific community.</p>
        </div>`;
      return;
    }
    pubWrap.innerHTML = data.publications
      .map(
        pub => `
      <div class="pub-card reveal">
        <p class="pub-card__title">${escapeHTML(pub.title)}</p>
        <p class="pub-card__meta">${escapeHTML(pub.venue || "")}${pub.year ? " · " + escapeHTML(pub.year) : ""}</p>
        ${pub.link ? `<a href="${escapeAttr(pub.link)}" target="_blank" rel="noopener">Read ↗</a>` : ""}
      </div>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — EDUCATION
  ---------------------------------------------------------------- */
  function renderEducation() {
    const wrap = document.getElementById("timeline");
    if (!wrap || !Array.isArray(data.education)) return;
    wrap.innerHTML = data.education
      .map(
        item => `
      <li class="timeline__item reveal${item.current ? " timeline__item--current" : ""}">
        <p class="timeline__degree">
          ${escapeHTML(item.degree)}
          ${item.current ? '<span class="badge">In progress</span>' : ""}
        </p>
        <p class="timeline__institute">${escapeHTML(item.institute)}</p>
        <p class="timeline__detail">${escapeHTML(item.detail || "")}</p>
      </li>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — ACHIEVEMENTS
  ---------------------------------------------------------------- */
  function renderAchievements() {
    const wrap = document.getElementById("achievementsGrid");
    if (!wrap) return;
    if (!Array.isArray(data.achievements) || data.achievements.length === 0) {
      wrap.innerHTML = `
        <div class="empty-state reveal">
          <p>Awards, certificates, and competition results will appear here as they're earned.</p>
        </div>`;
      return;
    }
    wrap.innerHTML = data.achievements
      .map(
        a => `
      <div class="achievement-card reveal">
        <p class="achievement-card__title">${escapeHTML(a.title)}</p>
        <p class="achievement-card__meta">${escapeHTML(a.issuer || "")}${a.year ? " · " + escapeHTML(a.year) : ""}</p>
      </div>`
      )
      .join("");
  }

  /* ----------------------------------------------------------------
     RENDER — CONTACT
  ---------------------------------------------------------------- */
  function renderContact() {
    const emailLink = document.getElementById("emailLink");
    if (emailLink) {
      if (data.email) {
        emailLink.href = `mailto:${data.email}`;
        emailLink.textContent = data.email;
      } else {
        emailLink.textContent = "Email coming soon";
        emailLink.removeAttribute("href");
      }
    }
    renderSocialIcons("socials", false);
  }

  function renderFooter() {
    setText("footerName", data.name);
    setText("year", String(new Date().getFullYear()));
    renderSocialIcons("footerSocials", false);
  }

  /* ----------------------------------------------------------------
     CONTACT FORM — validation, honeypot, submission
  ---------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const status = document.getElementById("formStatus");
    const submitBtn = form.querySelector("[type=submit]");

    function showStatus(msg, isError) {
      if (!status) return;
      status.textContent = msg;
      status.classList.toggle("form-status--error", !!isError);
      status.classList.add("is-visible");
    }

    form.addEventListener("submit", async e => {
      e.preventDefault();

      // Honeypot: bots fill every field, humans never see this one.
      if (form.elements["company"] && form.elements["company"].value) return;

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const subject = form.elements["subject"].value.trim();
      const message = form.elements["message"].value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailValid || !message) {
        showStatus("Please fill in your name, a valid email, and a message.", true);
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add("is-loading");
      showStatus("Sending…", false);

      try {
        if (data.contactEndpoint) {
          const res = await fetch(data.contactEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ name, email, subject, message })
          });
          if (!res.ok) throw new Error("Request failed");
          showStatus("Message sent — thank you! I'll get back to you soon.", false);
          form.reset();
        } else if (data.email) {
          // No backend configured yet: fall back to the visitor's own mail client.
          const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
          window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject || "Portfolio contact")}&body=${body}`;
          showStatus("Opening your email client…", false);
        } else {
          showStatus("Contact isn't configured yet — please check back soon.", true);
        }
      } catch (err) {
        showStatus("Something went wrong. Please try again in a moment.", true);
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove("is-loading");
      }
    });
  }

  /* ----------------------------------------------------------------
     THEME TOGGLE
  ---------------------------------------------------------------- */
  function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
    });
  }

  function isLight() {
    return document.documentElement.getAttribute("data-theme") === "light";
  }

  /* ----------------------------------------------------------------
     NAV — mobile toggle, smooth scroll, active-section indicator
  ---------------------------------------------------------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    const links = Array.from(document.querySelectorAll(".nav__link"));

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("no-scroll", open);
      });
      menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("no-scroll");
        });
      });
    }

    if (!links.length || !("IntersectionObserver" in window)) return;
    const sections = links
      .map(link => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const spy = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(s => spy.observe(s));
  }

  /* ----------------------------------------------------------------
     SCROLL REVEAL
  ---------------------------------------------------------------- */
  function initReveal() {
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        )
        : null;

    function attach() {
      const els = document.querySelectorAll(".reveal:not(.is-visible)");
      if (reduceMotion || !observer) {
        els.forEach(el => el.classList.add("is-visible"));
      } else {
        els.forEach(el => observer.observe(el));
      }
    }
    attach();
    // Re-scan shortly after render, since content is injected dynamically.
    setTimeout(attach, 50);
  }

  /* ----------------------------------------------------------------
     HERO MOUSE-FOLLOWING LIGHT
  ---------------------------------------------------------------- */
  function initHeroLight() {
    const hero = document.getElementById("hero");
    if (!hero || reduceMotion || isTouch) return;
    hero.addEventListener("pointermove", e => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mx", `${x}%`);
      hero.style.setProperty("--my", `${y}%`);
    });
  }

  /* ----------------------------------------------------------------
     CUSTOM CURSOR (desktop only)
  ---------------------------------------------------------------- */
  function initCursor() {
    if (isTouch || reduceMotion) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    document.body.classList.add("has-custom-cursor");

    let rx = 0, ry = 0, mx = 0, my = 0;
    window.addEventListener("pointermove", e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll("a, button, .tag, input, textarea").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("cursor-ring--active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-ring--active"));
    });
  }

  /* ----------------------------------------------------------------
     AMBIENT NEURAL-NETWORK CANVAS
     Drifting nodes connected by faint lines, with the occasional
     signal pulse traveling along an edge — a nod to the subject's
     own field (ML / neural networks) rather than a generic blob.
  ---------------------------------------------------------------- */
  function initCanvas() {
    const canvas = document.getElementById("net-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], pulses = [], rafId;

    const LINK_DIST = 150;
    const NODE_COUNT_DIVISOR = 14000;

    function resize() {
      const mobile = window.innerWidth <= 860;
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 2);
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
      const mobile = window.innerWidth <= 860;
      const cap = mobile ? 26 : 70;
      const count = Math.max(16, Math.min(cap, Math.floor((w * h) / NODE_COUNT_DIVISOR)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        r: Math.random() * 1.4 + 0.6
      }));
    }

    function dist(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
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

    function step() {
      ctx.clearRect(0, 0, w, h);

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * (isLight() ? 0.22 : 0.18);
            ctx.strokeStyle = isLight() ? `rgba(26, 92, 158, ${alpha})` : `rgba(111, 177, 224, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.fillStyle = isLight() ? "rgba(138, 104, 20, 0.6)" : "rgba(201, 169, 97, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      maybeSpawnPulse();
      pulses.forEach(p => {
        p.t += 0.0007;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = isLight() ? "rgba(100, 70, 10, 0.9)" : "rgba(227, 205, 149, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
      pulses = pulses.filter(p => p.t < 1);

      rafId = requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        step();
      }
    });
    resize();

    if (reduceMotion) {
      step();
      cancelAnimationFrame(rafId);
    } else {
      step();
    }
  }

  /* ----------------------------------------------------------------
     PAGE-LOAD ENTRANCE
  ---------------------------------------------------------------- */
  function initEntrance() {
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  }

  /* ----------------------------------------------------------------
     INIT
  ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderResearch();
    renderEducation();
    renderAchievements();
    renderContact();
    renderFooter();

    initThemeToggle();
    initNav();
    initReveal();
    initHeroLight();
    initCursor();
    if (!isTouch && window.innerWidth > 860) {
      initCanvas();
    } else {
      const canvas = document.getElementById("net-canvas");
      if (canvas) canvas.remove();
    }
    initContactForm();
    initEntrance();
  });
})();
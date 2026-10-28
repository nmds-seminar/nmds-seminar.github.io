// Renders SESSIONS (from sessions.js) into the page using the
// #session-template and #talk-template elements in index.html.
(function () {
  // A seminar counts as upcoming until it has finished.
  const SESSION_LENGTH_MS = 60 * 60 * 1000;

  const sessionTemplate = document.getElementById("session-template");
  const talkTemplate = document.getElementById("talk-template");

  const weekdayFmt = new Intl.DateTimeFormat("en-GB", { weekday: "short" });
  const monthFmt = new Intl.DateTimeFormat("en-GB", { month: "short" });
  const timeFmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" });

  function clone(template) {
    return template.content.firstElementChild.cloneNode(true);
  }

  // Last word of the speaker's name, used to order talks within a day.
  function surname(name) {
    return (name || "").trim().split(/\s+/).pop();
  }

  function renderTalk(talk) {
    const node = clone(talkTemplate);
    node.querySelector(".talk-title").textContent = talk.title;

    const speakerLine = node.querySelector(".talk-speaker");
    if (talk.speaker) {
      speakerLine.querySelector(".speaker").textContent = talk.speaker;
      const affil = speakerLine.querySelector(".affil");
      if (talk.affiliation) affil.textContent = talk.affiliation;
      else affil.remove();
    } else {
      speakerLine.remove();
    }

    const abstract = node.querySelector(".talk-abstract");
    if (talk.abstract) {
      const body = abstract.querySelector(".abstract-body");
      for (const para of talk.abstract.trim().split(/\n\s*\n/)) {
        const p = document.createElement("p");
        p.textContent = para.replace(/\s+/g, " ");
        body.append(p);
      }
    } else {
      abstract.remove();
    }

    const links = node.querySelector(".talk-links");
    if (talk.links && talk.links.length) {
      for (const link of talk.links) {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.label;
        links.append(a);
      }
    } else {
      links.remove();
    }

    return node;
  }

  // variant is "next", "upcoming" or "past"
  function renderSession(session, variant) {
    const node = clone(sessionTemplate);
    node.classList.add(`session--${variant}`);

    const date = new Date(session.datetime);
    const dateEl = node.querySelector(".session-date");
    dateEl.dateTime = session.datetime;
    dateEl.querySelector(".weekday").textContent = weekdayFmt.format(date);
    dateEl.querySelector(".day").textContent = date.getDate();
    let month = monthFmt.format(date);
    if (date.getFullYear() !== new Date().getFullYear()) month += ` ${date.getFullYear()}`;
    dateEl.querySelector(".month").textContent = month;
    dateEl.querySelector(".time").textContent = timeFmt.format(date);

    const talksEl = node.querySelector(".session-talks");
    const join = node.querySelector(".session-join");
    const talks = session.talks.length
      ? [...session.talks].sort((a, b) => surname(a.speaker).localeCompare(surname(b.speaker)))
      : [{ title: "To be announced" }];
    for (const talk of talks) {
      talksEl.insertBefore(renderTalk(talk), join);
    }
    if (variant !== "next") join.remove();

    return node;
  }

  function fill(variant, sessions, emptyText) {
    const container = document.querySelector(`[data-sessions="${variant}"]`);
    if (!sessions.length) {
      const p = document.createElement("p");
      p.className = "empty";
      p.textContent = emptyText;
      container.append(p);
      return;
    }
    for (const session of sessions) container.append(renderSession(session, variant));
  }

  const now = Date.now();
  const isOver = (s) => new Date(s.datetime).getTime() + SESSION_LENGTH_MS < now;
  const sorted = [...SESSIONS].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  const upcoming = sorted.filter((s) => !isOver(s));
  const past = sorted.filter(isOver).reverse();

  fill("next", upcoming.slice(0, 1), "No seminar scheduled yet — check back soon.");
  fill("upcoming", upcoming.slice(1), "Nothing else scheduled yet.");
  fill("past", past, "No past seminars yet.");

  // Close open tooltips when clicking elsewhere or pressing Escape.
  const closeTips = (except) => {
    for (const tip of document.querySelectorAll(".tip[open]")) {
      if (tip !== except) tip.open = false;
    }
  };
  document.addEventListener("click", (e) => closeTips(e.target.closest(".tip")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTips();
  });
})();

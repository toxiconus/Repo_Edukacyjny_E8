/**
 * CHE.LessonShell — wspólny layout lekcji (header + pływający hamburger TOC)
 *
 * Użycie:
 *   CHE.LessonShell.mount({
 *     code: 'N01', title: 'Tlenki', subject: 'chemia',
 *     variant: 'chemia', // opcjonalnie = subject
 *     toc: 'float-hamburger', // lub 'none'
 *     root: document.body
 *   });
 */
(function (g) {
  "use strict";
  var C = (g.CHE = g.CHE || {});
  var Shell = (C.LessonShell = C.LessonShell || {});

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") n.className = attrs[k];
        else if (k === "text") n.textContent = attrs[k];
        else n.setAttribute(k, attrs[k]);
      });
    }
    if (html != null) n.innerHTML = html;
    return n;
  }

  function collectTocItems(root) {
    var items = [];
    var dataNav = $("#che-lesson-toc-data", root);
    if (dataNav) {
      dataNav.querySelectorAll("a[href^='#']").forEach(function (a) {
        var id = (a.getAttribute("href") || "").slice(1);
        if (id) items.push({ id: id, label: a.textContent.trim() });
      });
      if (items.length) return items;
    }
    var sections = root.querySelectorAll("section[id][data-toc], main section[id]");
    if (sections.length) {
      sections.forEach(function (s) {
        var label =
          s.getAttribute("data-toc") ||
          (s.querySelector("h2, h3") && s.querySelector("h2, h3").textContent) ||
          s.id;
        items.push({ id: s.id, label: String(label).trim() });
      });
      if (items.length) return items;
    }
    root.querySelectorAll("main h2[id], article h2[id], h2[id]").forEach(function (h) {
      items.push({ id: h.id, label: h.textContent.trim() });
    });
    return items;
  }

  function subjectShort(subject) {
    var map = {
      chemia: "CHE",
      fizyka: "FIZ",
      biologia: "BIO",
      matematyka: "MAT",
      geografia: "GEO",
    };
    return map[subject] || (subject || "").slice(0, 3).toUpperCase() || "…";
  }

  function ensureHeader(opts, root) {
    var existing = $(".che-lesson-header", root);
    if (existing) return existing;
    var header = el("header", { className: "che-lesson-header", role: "banner" });
    header.appendChild(
      el("span", { className: "che-lh-code", text: opts.code || "" })
    );
    header.appendChild(
      el("span", { className: "che-lh-title", text: opts.title || "" })
    );
    header.appendChild(
      el("span", {
        className: "che-lh-badge",
        text: subjectShort(opts.subject || opts.variant),
      })
    );
    var actions = el("div", { className: "che-lh-actions" });
    if (opts.onLab) {
      var b = el("button", { type: "button", text: "W labie" });
      b.addEventListener("click", opts.onLab);
      actions.appendChild(b);
    }
    header.appendChild(actions);
    var main = $("main.che-lesson-main", root) || $("main", root);
    if (main && main.parentNode) main.parentNode.insertBefore(header, main);
    else root.insertBefore(header, root.firstChild);
    return header;
  }

  function buildTocUI(opts, items) {
    var fab = el("button", {
      className: "che-toc-fab",
      type: "button",
      "aria-label": "Spis treści",
      "aria-expanded": "false",
      "aria-controls": "che-toc-panel",
    });
    fab.innerHTML =
      '<span class="che-toc-fab-bars" aria-hidden="true"><i></i><i></i><i></i></span>';

    var backdrop = el("div", { className: "che-toc-backdrop", hidden: "true" });
    var panel = el("div", {
      className: "che-toc-panel",
      id: "che-toc-panel",
      role: "dialog",
      "aria-label": "Spis treści",
    });
    panel.innerHTML = "<h2>Spis treści</h2>";
    var nav = el("nav");
    items.forEach(function (it) {
      var a = el("a", { href: "#" + it.id, text: it.label });
      a.addEventListener("click", function () {
        close();
      });
      nav.appendChild(a);
    });
    panel.appendChild(nav);

    // print fallback
    var printBox = el("div", { className: "che-toc-print" });
    printBox.innerHTML = "<strong>Spis treści</strong>";
    var ul = el("ul");
    items.forEach(function (it) {
      var li = el("li");
      li.appendChild(el("a", { href: "#" + it.id, text: it.label }));
      ul.appendChild(li);
    });
    printBox.appendChild(ul);

    function open() {
      fab.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      backdrop.classList.add("is-open");
      backdrop.removeAttribute("hidden");
    }
    function close() {
      fab.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("hidden", "true");
    }
    function toggle() {
      if (fab.getAttribute("aria-expanded") === "true") close();
      else open();
    }

    fab.addEventListener("click", function (e) {
      e.stopPropagation();
      toggle();
    });
    backdrop.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    document.body.appendChild(fab);
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    var main = $(".che-lesson-main") || $("main");
    if (main) main.insertBefore(printBox, main.firstChild);

    // Active section on scroll
    var links = nav.querySelectorAll("a");
    var map = {};
    items.forEach(function (it, i) {
      map[it.id] = links[i];
    });
    function setActive(id) {
      links.forEach(function (a) {
        a.classList.remove("is-active");
        a.removeAttribute("aria-current");
      });
      if (map[id]) {
        map[id].classList.add("is-active");
        map[id].setAttribute("aria-current", "location");
      }
    }
    if ("IntersectionObserver" in window && items.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) setActive(en.target.id);
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      items.forEach(function (it) {
        var node = document.getElementById(it.id);
        if (node) io.observe(node);
      });
    }

    return { open: open, close: close, fab: fab, panel: panel };
  }

  Shell.mount = function (opts) {
    opts = opts || {};
    var root = opts.root || document.body;
    var variant = opts.variant || opts.subject || "default";
    root.setAttribute("data-lesson-subject", variant);
    if (opts.code) root.setAttribute("data-lesson-code", opts.code);

    ensureHeader(opts, root);

    var tocMode = opts.toc != null ? opts.toc : "float-hamburger";
    if (tocMode === "none") return { toc: null };

    var items = opts.tocItems || collectTocItems(root);
    if (!items.length) return { toc: null };

    var toc = buildTocUI(opts, items);
    Shell._instance = { opts: opts, toc: toc, items: items };
    return Shell._instance;
  };

  Shell.collectTocItems = collectTocItems;

  // Fiszki: kliknięcie odwraca kartę
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var btn = t.closest("[data-fiszki-toggle]");
    if (btn) {
      var panel = btn.closest("[data-fiszki-panel]");
      if (!panel) return;
      var body = panel.querySelector(".che-fiszki-body");
      if (!body) return;
      var open = btn.getAttribute("aria-expanded") === "true";
      if (open) {
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Pokaż fiszki";
        body.classList.add("is-collapsed");
        body.setAttribute("hidden", "true");
      } else {
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "Ukryj fiszki";
        body.classList.remove("is-collapsed");
        body.removeAttribute("hidden");
      }
      return;
    }
    var card = t.closest(".flashcard");
    if (card) card.classList.toggle("is-flipped");
  });
})(typeof window !== "undefined" ? window : globalThis);

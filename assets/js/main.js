/* ==========================================================================
   main.js – kleine Helfer für alle Seiten
   1. Hell/Dunkel-Schalter (speichert nur die Wahl "light" oder "dark")
   2. Mobiles Menü
   3. Aktuelles Jahr im Footer
   4. Bildvergrößerung in der Galerie (nur wenn echte Fotos eingebunden sind)
   Es werden keine Daten an andere Server gesendet.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "theme";

  /* 1. Hell/Dunkel ------------------------------------------------------- */

  function currentTheme() {
    var chosen = root.getAttribute("data-theme");
    if (chosen === "light" || chosen === "dark") return chosen;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateToggle(button) {
    var isDark = currentTheme() === "dark";
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  var themeButton = document.querySelector(".theme-toggle");
  if (themeButton) {
    updateToggle(themeButton);
    themeButton.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* Speichern nicht möglich (z. B. privater Modus) – Modus gilt dann nur für diese Seite */
      }
      updateToggle(themeButton);
    });
  }

  /* 2. Mobiles Menü ------------------------------------------------------ */

  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");

  function closeMenu() {
    if (!menuButton || !nav) return;
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Menü mit der Escape-Taste schließen
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
    });

    // Menü schließen, wenn das Fenster wieder breit wird
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000) closeMenu();
    });
  }

  /* 3. Aktuelles Jahr ---------------------------------------------------- */

  var yearElements = document.querySelectorAll("[data-year]");
  for (var i = 0; i < yearElements.length; i++) {
    yearElements[i].textContent = String(new Date().getFullYear());
  }

  /* 4. Bildvergrößerung -------------------------------------------------- */
  /* Funktioniert für Links mit der Klasse "gallery__link", die auf ein Bild zeigen. */

  var dialog = document.querySelector(".lightbox");
  var links = document.querySelectorAll(".gallery__link");

  if (dialog && links.length && typeof dialog.showModal === "function") {
    var dialogImg = dialog.querySelector("img");
    var dialogCaption = dialog.querySelector(".lightbox__caption");
    var closeButton = dialog.querySelector(".lightbox__close");

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var thumb = link.querySelector("img");
        dialogImg.src = link.getAttribute("href");
        dialogImg.alt = thumb ? thumb.alt : "";
        dialogCaption.textContent = link.getAttribute("data-caption") || "";
        dialog.showModal();
      });
    });

    closeButton.addEventListener("click", function () { dialog.close(); });

    // Klick auf den dunklen Hintergrund schließt ebenfalls
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }
})();

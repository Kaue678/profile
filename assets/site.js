"use strict";

(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.querySelector(".menu-backdrop");
  const mobile = window.matchMedia("(max-width: 900px)");
  const navLinks = [...document.querySelectorAll(".main-nav a")];

  function setMenu(open, restoreFocus = false) {
    const isOpen = mobile.matches && open;
    sidebar.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    backdrop.hidden = !isOpen;
    sidebar.inert = mobile.matches && !isOpen;
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  backdrop.addEventListener("click", () => setMenu(false, true));
  mobile.addEventListener("change", () => setMenu(false));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") setMenu(false, true);
  });
  navLinks.forEach(link => link.addEventListener("click", () => setMenu(false)));
  setMenu(false);

  const sections = [...document.querySelectorAll("main > section[id]")];
  let scrollScheduled = false;
  function updateActiveSection() {
    const topOffset = mobile.matches ? 110 : 90;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= topOffset) current = section.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sections[sections.length - 1].id;
    navLinks.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollScheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollScheduled) {
      window.requestAnimationFrame(updateActiveSection);
      scrollScheduled = true;
    }
  }, { passive: true });
  updateActiveSection();

  const publicationItems = [...document.querySelectorAll(".publication")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const searchInput = document.getElementById("publication-search");
  const count = document.getElementById("publication-count");
  const noResults = document.getElementById("no-results");
  let category = "all";
  const normalise = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const searchable = publicationItems.map(item => normalise(item.textContent));

  function applyFilters() {
    const query = normalise(searchInput.value.trim());
    let visibleCount = 0;
    publicationItems.forEach((item, index) => {
      const visible = (category === "all" || item.dataset.category === category) && searchable[index].includes(query);
      item.hidden = !visible;
      if (visible) visibleCount++;
    });
    count.textContent = `${visibleCount} selected publication${visibleCount === 1 ? "" : "s"}`;
    noResults.hidden = visibleCount !== 0;
  }

  filterButtons.forEach(button => button.addEventListener("click", () => {
    category = button.dataset.filter;
    filterButtons.forEach(other => other.setAttribute("aria-pressed", String(other === button)));
    applyFilters();
  }));
  searchInput.addEventListener("input", applyFilters);
  document.getElementById("reset-search").addEventListener("click", () => {
    category = "all";
    searchInput.value = "";
    filterButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === "all")));
    applyFilters();
    searchInput.focus();
  });
  applyFilters();
  document.getElementById("copyright-year").textContent = String(new Date().getFullYear());
})();

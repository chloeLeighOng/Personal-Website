
// Watching for scroll
const header = document.querySelector("header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    header.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "50px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);


// Watches for page change and changes active css styling on navigation list
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight) {
      current = section.getAttribute("id");
    } 
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
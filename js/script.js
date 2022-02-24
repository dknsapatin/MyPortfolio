//-----------Intersection Observer API---------------

const header = document.querySelector(".header");
// Grab the navigation section
const nav = document.querySelector(".section-nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  // If the entries is not intersecting the root: add stickty : remove sticky
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// Create an observer of intersection Observer function that takes in
// the stickyNav, the root and the threshold of the size
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

// Observe the header using the header observer that was created
headerObserver.observe(header);

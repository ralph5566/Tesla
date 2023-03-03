console.clear();
const sectionOne = document.getElementById("model_s");
// console.log(sectionOne);

const sections = document.querySelectorAll(".home");
// console.log(sections);

options = { root: null, treshold: 0, rootMargin: "0px" };

const observer = new IntersectionObserver(function (entries) {
  // console.log(entries[0].target);
  //   console.log(entries);
  entries.forEach((entry) => {
    console.log(entry.target);
    console.log(entry.isIntersecting);
  });
}, options);

// observer.observe(sectionOne);

sections.forEach((section) => {
  observer.observe(section);
});

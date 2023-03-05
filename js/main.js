console.clear();
const sectionOne = document.getElementById("model_s");
// console.log(sectionOne);

const sections = document.querySelectorAll(".home");
// console.log(sections);

const title = document.getElementsByClassName("car_model_title")[0];
const paragraph = document.getElementsByTagName("p")[0];
const link = document.getElementsByClassName("car_model_link")[0];
const left_btn = document.getElementsByClassName("home_button_order")[0];
const right_btn = document.getElementsByClassName("home_button_exist")[0];
// console.log(title);

let page = new Page(sections, title, paragraph, link, left_btn, right_btn);
creatObserver(sections);

function creatObserver(ele) {
  let options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  // observer.observe(sectionOne);

  sections.forEach((ele) => {
    observer.observe(ele);
  });
}

function handleIntersect(entries, observer) {
  // console.log(entries);
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      let current_id = entry.target.id;
      // console.log(entry.target);
      // console.log(entry.target.id);

      switch (current_id) {
        case "model_s":
          page.title = "Model S";
          page.paragraph = "Order Online for ";
          page.link = "Touchless Delivery";
          page.left_btn = "Custom Order";
          page.right_btn = "Existing Inventory";
          break;
        case "model_y":
          page.title = "Model Y";
          break;
        case "model_3":
          page.title = "Model 3";
          break;
        case "model_x":
          page.title = "Model X";
          page.paragraph = "Order Online for ";
          page.link = "Touchless Delivery";
          page.left_btn = "Custom Order";
          page.right_btn = "Existing Inventory";
          break;
        case "solar_panels":
          page.title = "Solar Panels";
          page.paragraph = "Lowest Cost Solar Panels in American";
          page.link = "";
          page.left_btn = "Order Now";
          page.right_btn = "Learn More";
          break;
        case "solar_roof":
          page.title = "Solar Roof";
          break;
        case value:

        default:
          break;
      }

      title.innerHTML = page.title;
      paragraph.childNodes[0].textContent = page.paragraph;
      link.childNodes[0].textContent = page.link;
      // console.log(left_btn.childNodes);
      left_btn.childNodes[0].textContent = page.left_btn;
      right_btn.childNodes[0].textContent = page.right_btn;
    }
  });
}

let listItems = document.querySelectorAll("nav #nav-list li a");

listItems.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.cssText = "color:white; ";
  });
  item.addEventListener("mouseout", (e) => {
    e.target.style.cssText = "color:#000;transition:0.2s linear ";
  });
  item.addEventListener("click", (e) => {
    listItems.forEach((i) => {
      i.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let icons = document.querySelectorAll(".icons ul li i");
icons.forEach((icon) => {
  icon.addEventListener("mouseover", (e) => {
    e.target.style.cssText =
      "color:white;transform:scale(2);margin:10px;transition:0.2s linear ";
  });
  icon.addEventListener("mouseout", (e) => {
    e.target.style.cssText = "color:#000; ";
  });
});

const nav = document.querySelector(".nav");
const nav__menu = nav.querySelector(".nav__menu");
const menu_open = nav.querySelector(".nav__menuicon-open");
const menu_close = nav.querySelector(".nav__menuicon-close");
const overlay = document.querySelector(".overlay");
const toggleClass = (menu)=>{
    menu_open.classList.toggle("hidden");
    menu_close.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    nav__menu.style.transform = `translateX(${menu === "open" ? "-" : ""}100%)`;
};
nav.addEventListener("click", function(e) {
    if (e.target.classList.contains("nav__menuicon-open")) toggleClass("open");
    if (e.target.classList.contains("nav__menuicon-close")) toggleClass("close");
});

//# sourceMappingURL=index.9345d665.js.map

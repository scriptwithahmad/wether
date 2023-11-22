// About Tabs
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
}
});


// NAVBAR ----------------------
const menuDiv = document.querySelector(".menu-bar-div")
const menuLine1 = document.querySelector(".line1")
const menuLine2 = document.querySelector(".line2"); 
const menuLine3 = document.querySelector(".line3");
const closeBtn = document.querySelector(".close-btn");
const showModel = document.querySelector(".overlay");
const body = document.querySelector("body");


menuDiv.addEventListener('click', function() {
    menuLine2.classList.toggle('line1None')
    menuLine1.classList.toggle('menuLine1')
    menuLine3.classList.toggle('menuLine3')

    showModel.classList.toggle('toggleModel')
})

window.addEventListener('scroll', function() {
    showModel.classList.remove('toggleModel')
})

closeBtn.addEventListener('click', function() {
    showModel.classList.remove('toggleModel')
})


// model Show 
const card = document.querySelector('card')
console.log(card)




const navBar = document.querySelector(".navMenu");
const home = document.createElement("li");
const homeLink = document.createElement("a");
const about = document.createElement("li");
const aboutLink = document.createElement("a");
const faq = document.createElement("li");
const faqLink = document.createElement("a");
const contact = document.createElement("li");
const contactLink = document.createElement("a");

homeLink.textContent = "Home";
aboutLink.textContent = "About";
faqLink.textContent = "FAQ";
contactLink.textContent = "Contact";

homeLink.setAttribute("class", "navItems");
homeLink.setAttribute("data-link", "home");
aboutLink.setAttribute("class", "navItems");
aboutLink.setAttribute("data-link", "about");
faqLink.setAttribute("class", "navItems");
faqLink.setAttribute("data-link", "faq");
contactLink.setAttribute("class", "navItems");
contactLink.setAttribute("data-link", "contact");

home.appendChild(homeLink);
about.appendChild(aboutLink);
faq.appendChild(faqLink);
contact.appendChild(contactLink);

navBar.appendChild(home);
navBar.appendChild(about);
navBar.appendChild(faq);
navBar.appendChild(contact);

const navMenuItems = document.querySelectorAll(".navItems");
navMenuItems.forEach((el) => {
    el.addEventListener("click", () => {
        for (let i = 0; i < navMenuItems.length; i++) {
            if (navMenuItems[i].classList.contains("active-link")) {
                navMenuItems[i].classList.remove("active-link");
            }
        }
        const elSection = document.getElementById(el.getAttribute("data-link"));
        elSection.scrollIntoView({behavior: "smooth", block: "center"});
        el.classList.add("active-link");
        el.classList.add("navLinks");
    })

})


// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLinks").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

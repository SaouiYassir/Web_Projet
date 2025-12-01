gsap.fromTo(".hero .title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
gsap.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1 })
gsap.fromTo(".logo_header", {opacity: 0, y: -50 }, {opacity: 1, y: 0, duration: 1})
gsap.fromTo(".links", {opacity: 0, y: -50 }, {opacity: 1, y: 0, duration: 1})
gsap.fromTo(".account", {opacity: 0, y: -50 }, {opacity: 1, y: 0, duration: 1})



let logo_header = document.getElementsByClassName("logo_header")[0];




logo_header.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const sideBar = document.querySelector('.links_side_bar');
    const closeIcon = document.querySelector('.close_icon');
    
    menuBar.addEventListener('click', function() {
        sideBar.classList.add('open');
    });
    
    closeIcon.addEventListener('click', function() {
        sideBar.classList.remove('open');
    });
});
function clicklink() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
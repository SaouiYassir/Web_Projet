gsap.fromTo(".hero .title", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })


let logo_header = document.getElementsByClassName("logo_header")[0];




logo_header.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


function openNav() {
    const sidebar = document.querySelector('header .links_side_bar');
    sidebar.classList.add('open');
}
function closeNav() {
    const sidebar = document.querySelector('header .links_side_bar');
    sidebar.classList.remove('open');
}
function clicklink() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
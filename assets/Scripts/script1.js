gsap.fromTo(".hero .title",{opacity:0,y:-50},{opacity:1,y:0,duration:1})


let myHeader = document.getElementsByClassName("myHeader")[0];
let logo_header = document.getElementsByClassName("logo_header")[0];


window.addEventListener("scroll",() => {
    if(window.scrollY > 50) {
        myHeader.classList.add("active");
    }else{
        myHeader.classList.remove("active")
    }
})


logo_header.addEventListener("click",()=> {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})


function openNav() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'flex'
}
function closeNav() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
function clicklink() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
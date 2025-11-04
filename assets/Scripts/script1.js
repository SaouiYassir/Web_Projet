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
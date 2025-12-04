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

function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}
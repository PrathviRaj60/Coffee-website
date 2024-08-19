document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navigationBar');
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.searchbar');

    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchBar.classList.remove('active');
    };

    searchBtn.onclick = () => {
        searchBar.classList.toggle('active');
        navbar.classList.remove('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
        searchBar.classList.remove('active');
    };
});

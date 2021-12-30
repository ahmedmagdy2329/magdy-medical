AOS.init({
    once: false,

});

let numbers = document.querySelectorAll(".numbers .number");
let stats_section = document.querySelector(".stats");
let menu_nav_show = document.querySelector('.navbar .collapse');
let function_count = false;

window.onscroll = function() {
    if (window.scrollY >= stats_section.offsetTop) {

        if (!function_count) {
            numbers.forEach((num) => statsCount(num));

        }
        function_count = true

    }
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains("navbar") &&
        !e.target.classList.contains("nav-link")
    ) {
        menu_nav_show.classList.remove('show');
    }

})

function statsCount(el) {
    let count = el.dataset.count;
    let countSet = setInterval(() => {
        el.textContent++;
        if (el.textContent == count) {
            clearInterval(countSet)
        }
    }, 3000 / count)
}
let spinner_loader = document.querySelector('.spinner');

window.addEventListener('load', function() {
    setTimeout
    spinner_loader.style.display = 'none';
})
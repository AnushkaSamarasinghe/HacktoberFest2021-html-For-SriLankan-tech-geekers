const container = document.querySelector(".container")

Array.from(document.querySelectorAll(".navbar-icon")).forEach(item => {
    item.addEventListener('click', () => {
        container.classList.toggle("change");
    });
});


const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});

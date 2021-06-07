let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

function myFunction() {
    let value = window.scrollY;

    text.style.top =  value * -1.5 + "px";
    bird1.style.top = -400 + value * -0.5 + "px";
    bird1.style.left = value * 0.5 + "px";
    bird2.style.top = -400 + value * -0.5 + "px";
    bird2.style.left = value * -0.25 + "px";
    btn.style.top = -50 + value * 0.5 + "px";
    rocks.style.top = -400 + value * -0.12 + "px";
    forest.style.top = -400+ value * 0.25 + "px";
    header.style.top = value * -0.5 + "px";
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let rounded = Math.round(scroll);
    if(rounded <= 740){
        window.addEventListener('scroll', myFunction);
    }
    else{
        window.removeEventListener('scroll', myFunction);
    }
    console.log(rounded)
});
// window.removeEventListener('scroll', myFunction);
let text = document.getElementById('text');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    title.style.marginTop = value * 2.5 + 'px';
    /* bg1.style.top = value * 0.5 + 'px';
    bg2.style.top = value * 0.5 + 'px';
    bg3.style.top = value * 0.5 + 'px';
    bg4.style.top = value * 0.5 + 'px'; */
});
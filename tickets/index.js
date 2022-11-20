
const navItem1 = document.querySelector('#item1');
const navItem2 = document.querySelector('#item2');
const navItem3 = document.querySelector('#item3');
const navItem4 = document.querySelector('#item4');
const navItem5 = document.querySelector('#item5');
const menuColapsado = document.querySelector('#navbarNav');

navItem1.addEventListener("click", ()=>{
    menuColapsado.classList.toggle('show')
});
navItem2.addEventListener("click", ()=>{
    menuColapsado.classList.toggle('show')
});
navItem3.addEventListener("click", ()=>{
    menuColapsado.classList.toggle('show')
});
navItem4.addEventListener("click", ()=>{
    menuColapsado.classList.toggle('show')
});
navItem5.addEventListener("click", ()=>{
    menuColapsado.classList.toggle('show')
});


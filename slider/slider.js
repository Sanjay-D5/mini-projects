let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener('wheel',(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrollContainer = 'auto';
});

nextbtn.addEventListener('click', () => {
    
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 200;
});

backbtn.addEventListener('click', () => {
   
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
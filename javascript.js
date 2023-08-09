const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const body = document.getElementById("body");

body.addEventListener("mousemove", (e) => {
    const y = e.pageY;
    const x = e.pageX;
    circle1.style.top = y-40 + "px";
    circle1.style.left = x-45 + "px";
    setTimeout(() => {
        circle2.style.top = y-(80+70) + "px";
        circle2.style.left = x-57 + "px";
    }, 100)
    setTimeout(() => {
        circle3.style.top = y - (160+125) + "px";
        circle3.style.left = x-70 + "px";
    }, 200)
})
let menu = document.querySelector(".nav-flex .menu i");
let box = document.querySelector(".nav-flex .div1");
let outer = document.querySelector(".nav-flex .div3 .outer");
let inner = document.querySelector(".nav-flex .div3 .inner");
let body = document.querySelector("body");
let line = document.querySelectorAll(".line");
let button = document.querySelectorAll("button");
let circle = document.querySelectorAll(".nav-flex .div2 .circle");
let circle2 = document.querySelectorAll("footer .circle .logo");
let svg = document.querySelectorAll("svg");

let flag="white";

menu.addEventListener("click", () => {
  if (box.style.height == 0 + "px") {
    box.style.height = "fit-content";
    box.style.paddingBottom = 2 + "vw";
  } else {
    box.style.height = 0 + "px";
    box.style.paddingBottom = 0;
  }
});

outer.addEventListener("click", () => {
  if (flag == "white") {
    inner.innerHTML=`<i class="ri-moon-fill"></i>`
    flag="black";
    outer.style.borderColor="white";
    inner.style.borderColor="white";
    inner.style.left= 50+"%";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    Array.from(button).forEach(color1);
    Array.from(line).forEach(color1);
    Array.from(circle).forEach(borderwhite);
    Array.from(circle2).forEach(borderwhite);
    Array.from(svg).forEach(svgcolor);
  }
  else{
    inner.innerHTML=`<i class="ri-sun-line"></i>`
    flag="white";
    outer.style.borderColor="black";
    inner.style.borderColor="black";
    inner.style.left= 0+"%";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    Array.from(button).forEach(color2);
    Array.from(line).forEach(color2);
    Array.from(circle).forEach(borderblack);
    Array.from(circle2).forEach(borderblack);
    Array.from(svg).forEach(svgcolorblack);
  }
});
function color1(item) {
  item.style.backgroundColor = "white";
  item.style.color = "black";
}
function color2(item) {
    item.style.backgroundColor = "black";
    item.style.color = "white";
}
function borderwhite(item){
    item.style.borderColor="white";
}
function borderblack(item){
    item.style.borderColor="black";
}
function svgcolor(item){
    item.querySelector("path").setAttribute("fill","white");
}
function svgcolorblack(item){
    item.querySelector("path").setAttribute("fill","black");
}
console.log("Welcome to the world beautiful")

let body = document.querySelector("body");
let container1 = document.createElement("div");
let container2 = document.createElement("div");
let container3 = document.createElement("div");
let container4 = document.createElement("div");



let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
let div7 = document.createElement("div");
let div8 = document.createElement("div");
let div9 = document.createElement("div");
let div10 = document.createElement("div");
let div11 = document.createElement("div");
let div12 = document.createElement("div");
let div13 = document.createElement("div");
let div14 = document.createElement("div");
let div15 = document.createElement("div");
let div16 = document.createElement("div");



div1.textContent = "Where's my twin?"
div2.textContent = "There she is!";
div5.textContent = "What's up doc?"

container1.append(div1, div2, div3, div4);
body.append(container1, container2, container3, container4);
container2.append(div5, div6, div7, div8);
container3.append(div9, div10, div11, div12);
container4.append(div13, div14, div15, div16);

let indDivs = document.querySelectorAll("div div")
let containers = document.querySelectorAll("body > div")

container1.style.backgroundColor = "black";
container2.style.backgroundColor = "orange";
container3.style.backgroundColor = "purple";
container4.style.backgroundColor = "red";

body.style.height = "99vh";

containers.forEach((element) => {
    element.style.display = "flex";
    element.style.flexGrow = "1";
})

indDivs.forEach((element) => {
    element.classList.add("Grid");
    element.style.border = "5px solid white";
    element.textContent = "Here I am";
    element.style.flexGrow = "1";
    element.style.color = "white";
});
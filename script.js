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
div2.textContent = "There she is!"
container1.append(div1, div2, div3, div4);
body.append(container1, container2, container3, container4);
container2.append(div5, div6, div7, div8);
container3.append(div9, div10, div11, div12);
container4.append(div13, div14, div15, div16);

container1.style.backgroundColor = "black";
container1.style.color = "white";
container2.style.backgroundColor = "yellow";
container2.textContent = "Banana"
container3.style.backgroundColor = "purple";
container3.textContent = "Cape";
container4.style.backgroundColor = "red";
container4.textContent = "blood";

container1.style.display = "flex";
container1.style.flexGrow = "1";
body.style.height = "99vh";
container2.style.flexGrow = "1";
container3.style.flexGrow = "1";
container4.style.flexGrow = "1";

container1.classList.add("container");
container2.classList.add("container");
container3.classList.add("container");
container4.classList.add("container");

let indDivs = document.querySelectorAll("div.container div")

indDivs.forEach((element) => {
    element.classList.add("Grid");
    element.style.border = "5px solid white";
    element.textContent = "Here I am";
    element.style.flexGrow = "1";
});
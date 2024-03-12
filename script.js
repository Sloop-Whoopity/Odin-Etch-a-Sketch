console.log("Welcome to the world beautiful")

let body = document.querySelector("body");

for (i = 1; i <= 16; i++) {
    console.log("I am the loop!");
    let container = document.createElement("div");
    for (j = 1; j <= 16; j++) {
        let item = document.createElement("div");
        container.appendChild(item)
    }
    body.appendChild(container);
}


let indDivs = document.querySelectorAll("div div")
let containers = document.querySelectorAll("body > div")


body.style.height = "99vh";
body.style.display = "flex";

containers.forEach((element) => {
    element.style.display = "flex";
    element.style.flexGrow = "1";
    element.style.backgroundColor = "red";
})

indDivs.forEach((element) => {
    element.classList.add("Grid");
    element.style.border = "3px solid white";
    element.textContent = "Here I am";
    element.style.flexGrow = "1";
    // element.style.color = "white";
});
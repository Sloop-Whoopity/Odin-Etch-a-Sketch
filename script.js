console.log("Welcome to the world beautiful")

let body = document.querySelector("body");
let scriptContainer = document.querySelector(".scriptContainer");
let button = document.querySelector("button");
let containerInput = 16;
let divInput = 16;
let containers;
let indDivs; 
let opacity = .1
createGrid()
configureContainers()
configureDivs()


body.style.height = "99vh";
scriptContainer.style.display = "flex";
scriptContainer.style.flexDirection = "column";
scriptContainer.style.flexGrow = "1";

function createGrid() {
    for (i = 1; i <= containerInput; i++) {
        console.log("I am the loop!");
        let container = document.createElement("div");
        for (j = 1; j <= divInput; j++) {
            let item = document.createElement("div");
            container.appendChild(item)
        }
        scriptContainer.appendChild(container);
    }
}

function configureContainers() {
    containers = document.querySelectorAll(".scriptContainer > div");
    containers.forEach((element) => {
        element.style.display = "flex";
        element.style.flexGrow = "1";
        element.style.backgroundColor = "white";
        element.classList.add("divContainer");
    })
}

function configureDivs() {
    indDivs = document.querySelectorAll(".divContainer > div")  //Query Selector cannot know the .divContainer class unless it comes after the class's creation in js.
    indDivs.forEach((element) => {
        element.classList.add("Grid");
        element.style.border = "3px solid white";
        element.style.flexGrow = "1";
        element.addEventListener("mouseover", () => {
        element.style.backgroundColor = `rgba(${getRGBColor()}, ${getRGBColor()}, ${getRGBColor()}, ${opacityIncreaser()})`;
        })
    });
}

button.addEventListener("click", () => {
    console.log("clicked");
    promptUser()
    if (containerInput > 100 || divInput > 100) {
        alert("Error.  You provided a number greater than 100.");
        promptUser();
    }
    containers.forEach((element) => element.remove());
    opacity = .1;
    createGrid();
    configureContainers();
    configureDivs();
})

function getRGBColor() {
    let rgbColor = Math.floor(Math.random() * 258) //258 multiplied by .99 gives us a number that can be rounded 
// down to 255, which is the highest rgb value available. 
    return rgbColor;
}

function opacityIncreaser() {
    console.log("Opacity ", opacity);
    opacity += .1;
    console.log("Opacity ", opacity);
    if (opacity >= 1) {opacity = 1};
    return opacity;
} 

function promptUser() {
    containerInput = +prompt("Please provide the number of vertical squares up to 100.", "");
    divInput = +prompt("Please provide the number of horizontal squares up to 100.", "");
}






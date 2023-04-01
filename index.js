// const container = document.querySelector(".container");
// const childDiv = document.createElement("div");

for (i=1; i <=256; i++) {
    const container = document.querySelector(".container");
    const childDiv = document.createElement("div");
    container.appendChild(childDiv);
    childDiv.className = ("child-div");
}
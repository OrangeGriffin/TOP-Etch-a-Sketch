// Create 256 childDiv elements
for (i = 1; i <= 256; i++) {
  const container = document.querySelector(".container");
  const childDiv = document.createElement("div");
  container.appendChild(childDiv);
  childDiv.className = "child-div";
}

// Target nodelist of all child-divs
const divTarget = document.querySelectorAll(".child-div");

// Add event listener to each child-div
// Update background-color to given child-div
divTarget.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});

// Create event listener for resize button
// Assign the entered value to newSize
const changeGridSizeBtn = document.querySelector("#change-grid-size")
changeGridSizeBtn.addEventListener('click', () => {
    let newSize = prompt("Enter Number up to 100")
    clearGrid();
    resizeGrid(newSize)
})

const resizeGrid = function(newSize) {
    console.log(newSize)
}

const clearGrid = function () {

}
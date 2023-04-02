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
    //console.log("Size entered: ", newSize);
    const inputSize = Number(newSize);
    const iterator = inputSize*inputSize;
    //console.log("Iterator: ", iterator);
    const sideLength = ((600/inputSize) - 2) + "px";
    //console.log("Side length: ", sideLength);

    // Create new childDivs based on given input
    for (i = 1; i <= iterator; i++) {
        const container = document.querySelector(".container");
        const childDiv = document.createElement("div");
        container.appendChild(childDiv);
        childDiv.className = "child-div";
      }

      // Because the original childDivs were removed and new childDivs
      // were created, need to create a new target
      const resizedDivTarget = document.querySelectorAll(".child-div");
      // Give the new childDivs an updated height and width
      resizedDivTarget.forEach((item) => {
        item.style.width = sideLength;
        item.style.height = sideLength;
        item.style.backgroundColor = "#d5d5d5";
      });
}

// Clear all existing childDivs
const clearGrid = function () {
    // Because the original childDivs were removed and new childDivs
      // were created, need to create a new target
    const clearDivTarget = document.querySelectorAll(".child-div");
    clearDivTarget.forEach((item) => {
        item.remove();
      });
}
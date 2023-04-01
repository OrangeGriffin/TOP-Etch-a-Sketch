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

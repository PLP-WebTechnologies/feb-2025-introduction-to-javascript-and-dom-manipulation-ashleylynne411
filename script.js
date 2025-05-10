// Change text content dynamically
function changeText() {
    document.getElementById("title").textContent = "Text Changed!";
    document.getElementById("description").textContent = "You clicked the button.";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    let title = document.getElementById("title");
    title.classList.toggle("highlight");
}

// Add or remove an element when a button is clicked
function toggleElement() {
    let container = document.getElementById("dynamicContainer");
    
    if (container.innerHTML === "") {
        let newElement = document.createElement("p");
        newElement.textContent = "Here is a new element!";
        newElement.style.color = "green";
        container.appendChild(newElement);
    } else {
        container.innerHTML = ""; // Remove the element
    }
}

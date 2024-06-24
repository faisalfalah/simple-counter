// Select the counter element and buttons
const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

// Initialize counter value
let counterValue = 0;

// Function to update the counter display
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Event listener for increment button
incrementButton.addEventListener("click", () => {
  counterValue += 5; // Increase counter value
  updateCounter(); // Update the display
});

// Event listener for decrement button
decrementButton.addEventListener("click", () => {
  if (counterValue > 0) {
    // Check if counter value is greater than zero
    counterValue -=5; // Decrease counter value
    updateCounter(); // Update the display
  }
});

// Event listener for reset button
resetButton.addEventListener("click", () => {
  counterValue = 0; // Reset counter value to zero
  updateCounter(); // Update the display
});

// Initial update to display the initial counter value
updateCounter();

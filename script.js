document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("proclamationButton");
  const message = document.getElementById("proclamationMessage");

  if (button && message) {
    button.addEventListener("click", () => {
      message.style.display = "block"; // show hidden message
    });
  } else {
    console.error("Button or message element not found.");
  }
});

// Select elements
const receiverName = document.querySelector("#receiver");
const modal = document.querySelector("#nameModal");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

// Get sender & receiver from URL
const urlParams = new URLSearchParams(window.location.search);
const receiverFromURL = urlParams.get("receiver");
const sender = urlParams.get("sender") || "Sharvil Amburle";

// Get saved receiver from localStorage
const savedReceiver = localStorage.getItem("receiverName");

// Show modal if no name found
if (!receiverFromURL && !savedReceiver) {
  modal.classList.remove("hidden");
} else {
  receiverName.textContent = receiverFromURL || savedReceiver;
}

// When user submits their name
submitName.addEventListener("click", () => {
  const enteredName = nameInput.value.trim();

  if (enteredName) {
    receiverName.textContent = enteredName;
    localStorage.setItem("receiverName", enteredName);
    modal.classList.add("hidden");
  } else {
    alert("Please enter your name before continuing!");
  }
});

// ── SCROLL TO TOP BUTTON ──
// Show the button when user scrolls down 300px
window.onscroll = function () {
  var btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
};

// Scroll back to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// ── SUBMIT RECOMMENDATION ──
function submitRecommendation() {
  // Get the values from the form
  var name = document.getElementById("rec-name").value;
  var message = document.getElementById("rec-message").value;

  // Check that the message is not empty
  if (message.trim() === "") {
    alert("Please enter a message!");
    return;
  }

  // Set the author name
  var author = "Anonymous";
  if (name.trim() !== "") {
    author = name;
  }

  // Create a new recommendation card
  var newCard = document.createElement("div");
  newCard.classList.add("rec-card", "new-card");
  newCard.innerHTML = '<p>"' + message + '"</p><span class="rec-author">— ' + author + '</span>';

  // Add the card to the grid
  document.getElementById("rec-grid").appendChild(newCard);

  // Clear the form fields
  document.getElementById("rec-name").value = "";
  document.getElementById("rec-message").value = "";

  // Show the thank you popup
  showPopup();
}


// ── POPUP ──
function showPopup() {
  document.getElementById("popup-overlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popup-overlay").classList.remove("active");
}
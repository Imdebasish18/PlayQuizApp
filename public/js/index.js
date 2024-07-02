document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Add click event listener to the button
  scrollToTopBtn.addEventListener("click", function () {
    // Scroll the document to the top position
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  });
});

let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Show an alert dialog when the button is clicked
    // alert("Join us for free and play the quize!");
    window.location.href = "https://playquizapp.onrender.com/register?";
  });
});

function toggleDropdown() {
  let dropdownContent = document.getElementById("dropdownContent");
  let dropBtn = document.querySelector(".dropbtn");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    dropBtn.src = "./images/menu.png";
  } else {
    dropdownContent.style.display = "block";
    dropBtn.src = "./images/cross.png";
  }
  // Prevent event from bubbling up to the window onclick handler
  event.stopPropagation();
}

window.onclick = function (event) {
  let dropdownContent = document.getElementById("dropdownContent");
  let dropBtn = document.querySelector(".dropbtn");

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    dropBtn.src = "./images/menu.png"; // Ensure the original image is set
  }
};
// Prevent the dropdown menu from closing when clicking inside it
document.getElementById("dropdownContent").onclick = function (event) {
  event.stopPropagation();
};

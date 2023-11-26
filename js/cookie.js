let popUp = document.getElementById("cookiePopup");

// When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  // Create date object
  let d = new Date();

  // Set the expiration date to a specific day and month
  d.setDate(26); // Set the day (1st)
  d.setMonth(11); // Set the month (December)
  // Note: Months are zero-based, so 11 represents December

  // Create the cookie with name = myCookieName, value = thisIsMyCookie, and the specified expiration date
  document.cookie = "myCookieName=thisIsMyCookie; expires=" + d.toUTCString() + ";";

  // Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

// Check if cookie is already present
const checkCookie = () => {
  // Read the cookie and split on "="
  let input = document.cookie.split("=");

  // Check for our cookie
  if (input[0] == "myCookieName") {
    // Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    // Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

// Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};

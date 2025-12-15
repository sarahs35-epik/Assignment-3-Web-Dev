// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact form");
  const contactPage = document.getElementById("contact-page");

  form.addEventListener("submit", function (event) {
    // always stop the real submit + reload
    event.preventDefault(); // [web:50][web:52]

    const nameInput = document.getElementById("user-name");
    const emailInput = document.getElementById("user-email");
    const messageInput = document.getElementById("user-message");

    const nameFilled = nameInput.value.trim() !== "";
    const emailFilled = emailInput.value.trim() !== "";
    const messageFilled = messageInput.value.trim() !== "";

    // clear any old error
    let oldError = document.getElementById("form-error");
    if (oldError) {
      oldError.remove();
    }

    if (nameFilled && emailFilled && messageFilled) {
      // all fields filled: show thank‑you message
      contactPage.innerHTML = "";

      const thankYou = document.createElement("p");
      thankYou.textContent = "Thank you for your message";
      thankYou.style.fontSize = "24px";
      contactPage.appendChild(thankYou);
    } else {
      // not all fields filled: show an error message under the form
      const errorP = document.createElement("p");
      errorP.id = "form-error";
      errorP.textContent = "Please fill the form before submitting";
      errorP.style.color = "red";
      errorP.style.marginTop = "12px";
      form.appendChild(errorP);
    }
  });
});
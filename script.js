// BOOKING FORM LOGIC
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // GET FORM VALUES
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const program = document.getElementById("program").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  // SHOW SUCCESS MESSAGE
  document.getElementById("successMessage").classList.remove("d-none");

  // SEND TO LINE (Log payload output to console)
  const lineMessage = `New Booking
Name: ${name}
Phone: ${phone}
Email: ${email}
Program: ${program}
Date: ${date}
Time: ${time}
Message: ${message}`;

  console.log(lineMessage);

  // OPTIONAL: SEND TO GOOGLE SHEETS / EMAIL API HERE

  // RESET FORM
  document.getElementById("bookingForm").reset();
});

// LANGUAGE SWITCH LOGIC
function switchLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerHTML = el.getAttribute("data-" + lang);
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const checkIn = document.getElementById("check-in").value;
      const checkOut = document.getElementById("check-out").value;
      const roomType = document.getElementById("room-type").value;
      
      // Perform validation here (e.g., check if dates are valid, email format is correct, etc.)
      
      // If validation passes, you can perform further actions like sending data to a server.
      // For now, let's just show an alert.
      alert("Booking successful!\nName: " + name + "\nEmail: " + email + "\nCheck-In: " + checkIn + "\nCheck-Out: " + checkOut + "\nRoom Type: " + roomType);
    });
  });
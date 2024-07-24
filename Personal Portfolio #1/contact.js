// CONTACT FORM IN CONTACT US PAGE //
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form (this is simple validation, you may need more robust validation)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      // Display success message
      document.getElementById('form-message').innerText = `Thank you ${name} for your message!🎉`;
      
      // Optionally clear the form
      document.getElementById('contact-form').reset();
    } else {
      // Display error message (this should not be necessary due to required attribute, but for safety)
      document.getElementById('form-message').innerText = 'Please fill out all fields.';
    }
  });
});
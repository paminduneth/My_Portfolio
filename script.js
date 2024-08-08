// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    alert('Thank you for your message! I will get back to you soon.');

    this.reset(); // Reset the form fields
});

// Handle "Book a Call" button click
document.getElementById('bookCallBtn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Contact me at: +94 0772779405');
});



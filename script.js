// Function to process the booking form submission
function processBooking(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const artist = document.getElementById('artist').value;
    const date = document.getElementById('date').value;

    // Validate the input (basic validation)
    if (!name || !email || !date) {
        alert('Please fill out all required fields.');
        return;
    }

    // Simulate booking by outputting the data to console
    console.log(`Booking Details:\nName: ${name}\nEmail: ${email}\nService: ${service}\nArtist: ${artist}\nDate: ${date}`);

    // Display a confirmation message
    document.getElementById('bookingConfirmation').innerHTML = `Thank you, ${name}! Your appointment for a ${service} session on ${date} has been booked. We will send you a confirmation email at ${email}.`;
}

document.getElementById('bookingForm').addEventListener('submit', processBooking);

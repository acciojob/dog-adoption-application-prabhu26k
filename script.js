// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adoptionForm');
    const messageBox = document.getElementById('messageBox'); // Get the message box element

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            phoneNumber: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            hasLivedWithDog: document.getElementById('checkbox').checked,
            preferredBreeds: Array.from(document.getElementById('select').selectedOptions).map(option => option.value)
        };

        console.log('Form Submitted Data:', formData); // Log data to console for verification

        // Simulate a successful submission
        // Instead of alert(), we use the custom showMessage function
        showMessage('Application submitted successfully!', 'success');

        // You would typically send this data to a server here using fetch or XMLHttpRequest
        // Example:
        /*
        fetch('/api/adopt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            showMessage('Application submitted successfully!', 'success');
            form.reset(); // Clear the form after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            showMessage('There was an error submitting your application. Please try again.', 'error');
        });
        */
    });

    /**
     * Displays a message in the message box element.
     * This function is used instead of alert() for better user experience within the environment.
     * @param {string} message - The message to display.
     * @param {string} type - The type of message ('success' or 'error'), used for styling.
     */
    function showMessage(message, type) {
        messageBox.textContent = message; // Set the message text
        // Apply appropriate CSS classes for styling (e.g., green for success, red for error)
        messageBox.className = `mt-4 p-4 rounded-lg text-white text-center ${type}`;
        messageBox.classList.remove('hidden'); // Make the message box visible

        // Hide the message box after 5 seconds
        setTimeout(() => {
            messageBox.classList.add('hidden'); // Hide the message box
            messageBox.textContent = ''; // Clear the message text
            // Reset the classes to hidden state
            messageBox.className = 'mt-4 p-4 rounded-lg text-white text-center hidden';
        }, 5000); // Message will disappear after 5 seconds
    }
});


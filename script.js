document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoptionForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            hasLivedWithDog: document.getElementById('hasLivedWithDog').checked,
            preferredBreeds: Array.from(document.getElementById('preferredBreeds').selectedOptions).map(option => option.value)
        };

        // Validate form data
        if (!validateForm(formData)) {
            return;
        }

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will contact you soon.');
        form.reset();
    });

    function validateForm(data) {
        // Validate name
        if (data.name.trim() === '') {
            alert('Please enter your name');
            return false;
        }

        // Validate phone number (basic validation)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        // Validate address
        if (data.address.trim() === '') {
            alert('Please enter your address');
            return false;
        }

        // Validate preferred breeds
        if (data.preferredBreeds.length === 0) {
            alert('Please select at least one preferred breed');
            return false;
        }

        return true;
    }
});
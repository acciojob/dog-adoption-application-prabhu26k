document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoptionForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const breedsSelect = document.getElementById('preferredBreeds');

    // Format phone number as user types
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    phoneInput.addEventListener('input', validatePhone);
    addressInput.addEventListener('input', validateAddress);
    breedsSelect.addEventListener('change', validateBreeds);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isAddressValid = validateAddress();
        const isBreedsValid = validateBreeds();

        if (!isNameValid || !isPhoneValid || !isAddressValid || !isBreedsValid) {
            return;
        }

        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            phone: phoneInput.value,
            address: addressInput.value.trim(),
            hasLivedWithDog: document.getElementById('hasLivedWithDog').checked,
            preferredBreeds: Array.from(breedsSelect.selectedOptions).map(option => option.value)
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will contact you soon.');
        form.reset();
    });

    function validateName() {
        const name = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        
        if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            nameInput.setCustomValidity('Name must be at least 2 characters long');
            return false;
        }
        
        if (!/^[A-Za-z\s]+$/.test(name)) {
            nameError.textContent = 'Name can only contain letters and spaces';
            nameInput.setCustomValidity('Name can only contain letters and spaces');
            return false;
        }

        nameError.textContent = '';
        nameInput.setCustomValidity('');
        return true;
    }

    function validatePhone() {
        const phone = phoneInput.value;
        const phoneError = document.getElementById('phoneError');
        
        if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number (e.g., 123-456-7890)';
            phoneInput.setCustomValidity('Please enter a valid phone number');
            return false;
        }

        phoneError.textContent = '';
        phoneInput.setCustomValidity('');
        return true;
    }

    function validateAddress() {
        const address = addressInput.value.trim();
        const addressError = document.getElementById('addressError');
        
        if (address.length < 10) {
            addressError.textContent = 'Address must be at least 10 characters long';
            addressInput.setCustomValidity('Address must be at least 10 characters long');
            return false;
        }

        addressError.textContent = '';
        addressInput.setCustomValidity('');
        return true;
    }

    function validateBreeds() {
        const selectedBreeds = breedsSelect.selectedOptions;
        const breedsError = document.getElementById('breedsError');
        
        if (selectedBreeds.length === 0) {
            breedsError.textContent = 'Please select at least one preferred breed';
            breedsSelect.setCustomValidity('Please select at least one preferred breed');
            return false;
        }

        breedsError.textContent = '';
        breedsSelect.setCustomValidity('');
        return true;
    }
});
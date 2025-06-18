document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('dogAdoptionForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Dynamically collect all form data
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const livedWithDog = form.livedWithDog.checked ? form.livedWithDog.value : 'No';
    
    const selectedBreeds = Array.from(form.multiSelect.selectedOptions).map(option => option.value);

    // Dynamic summary (for confirmation or debug)
    const summary = `
      Name: ${name}
      Phone: ${phone}
      Address: ${address}
      Lived With Dog Before: ${livedWithDog}
      Selected Breeds: ${selectedBreeds.join(', ')}
    `;

    alert("Your form is submitted.\n\n" + summary);
  });
});

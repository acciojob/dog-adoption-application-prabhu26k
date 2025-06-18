document.getElementById('breeds').addEventListener('change', function () {Add commentMore actions
  const selected = Array.from(this.selectedOptions);
  if (selected.length > 2) {
    selected[selected.length - 1].selected = false;
    alert("You can only select up to 2 breeds.");
  }
});

document.getElementById('dogAdoptionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const livedWithDog = document.getElementById('livedWithDog').checked;
  

  const breedOptions = document.getElementById('breeds').selectedOptions;
  const selectedBreeds = Array.from(breedOptions).map(option => option.value);
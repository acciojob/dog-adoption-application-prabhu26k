document.getElementById('dogAdoptionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const livedWithDog = document.getElementById('livedWithDog').checked;
  
  const breedOptions = document.getElementById('breeds').selectedOptions;
  const selectedBreeds = Array.from(breedOptions).map(option => option.value);

  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Address:", address);
  console.log("Lived with dog before:", livedWithDog);
  console.log("Preferred breeds:", selectedBreeds);

  alert("Your form is submitted successfully!");
});

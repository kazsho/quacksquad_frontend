// Dynamically populate locations
const locations = ['Location A', 'Location B', 'Location C']; // Replace with your demo data
const locationSelect = document.getElementById('location');

locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    locationSelect.appendChild(option);
});

// Show uploaded image name
const imageInput = document.getElementById('image');
const imageName = document.getElementById('imageName');

imageInput.addEventListener('change', function() {
    imageName.textContent = this.files[0].name;
});

// Remove uploaded image name when clicked
imageName.addEventListener('click', function() {
    imageInput.value = '';
    this.textContent = '';
});

// Form submission
const form = document.getElementById('toolForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // You can handle form submission here, like sending data to backend or validating inputs
    console.log('Form submitted!');
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add your logic to handle form submission
      console.log('Form submitted');
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Extract toolId from the URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const toolId = urlParams.get('toolId');

    // Populate the toolID field in the form with the extracted toolId
    document.getElementById('toolID').value = toolId;
});
document.addEventListener('DOMContentLoaded', function() {
  const reservationForm = document.getElementById('reservationForm');

  reservationForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Extract form data
      const toolID = document.getElementById('toolID').value;
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;

      // Check if all fields are filled
      if (toolID && fullName && email && phoneNumber && startDate && endDate) {
          // Create reservation object
          const reservationData = {
              tool_id: toolID,
              email_address: email,
              name: fullName,
              phone_number: phoneNumber,
              start_date: startDate,
              end_date: endDate
          };

          try {
              // Send reservation data to the backend endpoint
              const response = await fetch('https://communitychest.onrender.com/reservations', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(reservationData)
              });

              if (response.ok) {
                  // Display success message
                  alert('Tool Reserved');
                  // Reset the form
                  reservationForm.reset();
              } else {
                  throw new Error('Failed to reserve tool');
              }
          } catch (error) {
              console.error('Error reserving tool:', error);
              alert('Failed to reserve tool. Please try again.');
          }
      } else {
          alert('Please fill in all fields before submitting.');
      }
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

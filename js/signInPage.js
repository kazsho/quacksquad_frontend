document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Form submission attempt');
  const data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }

  const form = document.querySelector('#signup-form')
  console.log(data);

  // This pattern is called: Immediately Invoked Function Expression (IIFE)
  (async () => {
    const response = await fetch('https://communitychest.onrender.com/users/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        staff_username: form.querySelector('#username').value,
        staff_password: form.querySelector('#password').value
      })
    });

    const data = await response.json();
    console.log(data);

    if (data.authenticated === true) {
      // Valid user 
      console.log('Valid user');
      // Redirect to the updateTool.html page
      window.location.href = "updateTool.html";
      // Store the token in the local storage
      localStorage.setItem("token", data.token)
    } else {
      // Invalid user
      console.log('Invalid user');
      // Display an error message
      alert('Invalid user');
    }
  })()
})

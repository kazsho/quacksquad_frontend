document.addEventListener('DOMContentLoaded', function() {
    // Extract toolId from the URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const toolId = urlParams.get('toolId');

    // Fetch tool data from the backend using toolId
    fetchToolData(toolId)
        .then(async toolData => {
            // Update the page with the fetched tool data
            document.getElementById('toolName').textContent = toolData.tool_name;
            const imgElement = document.createElement('img');
            imgElement.src = toolData.image_url;
            document.getElementById('toolImageContainer').appendChild(imgElement);
            document.getElementById('availabilityStatus').textContent = `Status: ${toolData.status}`;
            const locationData = await fetchLocationData(toolData.location_id)
            document.getElementById('address').textContent = `Location: ${locationData.street_address}, ${locationData.post_code}`; //
            document.getElementById('toolDetails').textContent = toolData.description;
        })
        .catch(error => {
            console.error('Error fetching tool data:', error);
        });
});



document.addEventListener('DOMContentLoaded', function() {
    // Extract toolId from the URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const toolId = urlParams.get('toolId');

    // Fetch tool data from the backend using toolId
    fetchToolData(toolId)
        .then(async toolData => {
            // Update the page with the fetched tool data
            document.getElementById('toolName').textContent = toolData.tool_name;
            const imgElement = document.createElement('img');
            imgElement.src = toolData.image_url;
            document.getElementById('toolImageContainer').appendChild(imgElement);
            document.getElementById('availabilityStatus').textContent = `Status: ${toolData.status}`;
            const locationData = await fetchLocationData(toolData.location_id);
            document.getElementById('address').textContent = `Location: ${locationData.street_address}, ${locationData.post_code}`;
            document.getElementById('toolDetails').textContent = toolData.description;

            // Add event listener to the Reserve button
            document.getElementById('reserveButton').addEventListener('click', function() {
                // Redirect to reservation.html page with toolId as query parameter
                window.location.href = `reservation.html?toolId=${toolId}`;
            });
        })
        .catch(error => {
            console.error('Error fetching tool data:', error);
        });
});




async function fetchLocationData(location_id){
    try {
        const response = await fetch(`http://localhost:3000/locations/${location_id}`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        throw new Error('Failed to fetch location data');
    }

}
// Function to fetch tool data from the backend using toolId
async function fetchToolData(toolId) {
    try {
        const response = await fetch(`http://localhost:3000/tools/${toolId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch tool data');
    }
}
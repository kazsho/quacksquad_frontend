document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching data from the backend
    const toolData = {
        name: "Electric Drill",
        imageUrl: "https://m.media-amazon.com/images/I/51DdYAXA93L._AC_SL1000_.jpg",
        availability: "Available",
        address: "123 blabla St, bl1 6bl",
        details: "This is a powerful electric drill, suitable for a variety of drilling and screwdriving tasks."
    };

    // Update the page with the tool data
    document.getElementById('toolName').textContent = toolData.name;
    const imgElement = document.createElement('img');
    imgElement.src = toolData.imageUrl;
    document.getElementById('toolImageContainer').appendChild(imgElement);
    document.getElementById('availabilityStatus').textContent = `Status: ${toolData.availability}`;
    document.getElementById('address').textContent = `Location: ${toolData.address}`;
    document.getElementById('toolDetails').textContent = toolData.details;
});
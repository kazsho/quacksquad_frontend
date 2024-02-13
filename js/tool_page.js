document.getElementById('toolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const toolName = document.getElementById('toolName').value;
    fetchTools(toolName);
});

function fetchTools(toolName) {
    // Simulated data for demonstration purposes
    const tools = [
        { name: "Hammer", image: "hammer.jpg", status: "Available", description: "A tool used for driving nails and breaking objects.", price: "$5 per day" },
        { name: "Screwdriver", image: "screwdriver.jpg", status: "Available", description: "A tool used for turning screws.", price: "$3 per day" },
        { name: "Drill", image: "drill.jpg", status: "Not Available", description: "A tool used for drilling holes in various materials.", price: "$10 per day" }
    ];

    const toolList = document.getElementById('toolList');
    toolList.innerHTML = ''; // Clear previous list

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.classList.add('tool-item');

        const toolBox = document.createElement('div');
        toolBox.classList.add('tool-box');

        const toolImage = document.createElement('img');
        toolImage.src = `images/${tool.image}`; // Assuming images are stored in an 'images' folder
        toolImage.alt = tool.name;
        toolBox.appendChild(toolImage);

        const toolDetails = document.createElement('div');
        toolDetails.classList.add('tool-details');

        const toolNameElement = document.createElement('div');
        toolNameElement.classList.add('tool-name');
        toolNameElement.textContent = tool.name;
        toolDetails.appendChild(toolNameElement);

        const toolStatus = document.createElement('div');
        toolStatus.classList.add('tool-status');
        toolStatus.textContent = `Status: ${tool.status}`;
        toolDetails.appendChild(toolStatus);

        const toolDescription = document.createElement('div');
        toolDescription.classList.add('tool-description');
        toolDescription.textContent = tool.description;
        toolDetails.appendChild(toolDescription);

        const toolPrice = document.createElement('div');
        toolPrice.classList.add('tool-price');
        toolPrice.textContent = `Price: ${tool.price}`;
        toolDetails.appendChild(toolPrice);

        toolBox.appendChild(toolDetails);
        toolItem.appendChild(toolBox);
        toolList.appendChild(toolItem);
    });
}
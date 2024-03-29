const searchEndpoint = "https://communitychest.onrender.com/tools/search?search="

const randomEndpoint = "https://communitychest.onrender.com/tools/random"

window.addEventListener('load', async function() {
    await fetchRandomData();
});

async function fetchRandomData() {
    try {
        const response = await fetch(randomEndpoint);
        const data = await response.json();
        renderDOM(data);
    } catch (err) {
        console.error(err);
    }
}

document.getElementById('toolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const toolName = document.getElementById('toolName').value;
    fetchSearchData(toolName);
});

async function fetchSearchData(searchValue){
    try{
        const response = await fetch(searchEndpoint + encodeURIComponent(searchValue))
        const data = await response.json()
        console.log(data)
        renderDOM(data) 
    }catch(err){
        console.error(err)
    }
}

function renderDOM(tools) {
    const toolList = document.getElementById('toolList');
    toolList.innerHTML = ''; // Clear previous list

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.classList.add('tool-item');

        const toolBox = document.createElement('div');
        toolBox.classList.add('tool-box');
        toolBox.addEventListener('click', function() {
            // Redirect to toolInformation page
            window.location.href = `toolInformation.html?toolId=${tool.tool_id}`;
        });

        
        
        const toolImage = document.createElement('img');
        toolImage.src = tool.image_url; // Assuming 'image_URL' property contains the URL of the image
        toolImage.classList.add('tool-image');
        toolImage.addEventListener('click', function() {
            // Redirect to toolInformation page
            window.location.href = `toolInformation.html?toolId=${tool.tool_id}`;
        });
        toolBox.appendChild(toolImage);
        
        
        
        
        
        // const toolImage = document.createElement('img');
        // console.log(tool.image_url)
        // toolImage.src = tool.image_url; // Assuming 'image_URL' property contains the URL of the image
        // //toolImage.alt = tool.image_alt; // Assuming 'image_alt' is the alt text for the image, adjust this based on your backend data
        // toolBox.appendChild(toolImage); 

        const toolDetails = document.createElement('div');
        toolDetails.classList.add('tool-details');

        const toolNameElement = document.createElement('h2');
        toolNameElement.classList.add('tool-name');
        toolNameElement.textContent = tool.tool_name;
        toolDetails.appendChild(toolNameElement);

        const toolStatus = document.createElement('span');
        toolStatus.classList.add('tool-status');
        toolStatus.classList.add(tool.status.toLowerCase()); 
        toolStatus.textContent = `Status: ${tool.status}`;
        toolDetails.appendChild(toolStatus);

        const toolDescription = document.createElement('p');
        toolDescription.classList.add('tool-description');
        toolDescription.textContent = tool.description;
        toolDetails.appendChild(toolDescription);

        const toolPrice = document.createElement('span');
        toolPrice.classList.add('tool-price');
        toolPrice.textContent = "Price per day: £" + tool.price_per_day;  // Price per day: £3.00
        toolDetails.appendChild(toolPrice);

        toolBox.appendChild(toolDetails);
        toolItem.appendChild(toolBox);
        toolList.appendChild(toolItem);
    });
}

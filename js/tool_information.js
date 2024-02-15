const toolEndpoint = "http://localhost:3000/tools/"
const locationEndpoint = "http://localhost:3000/locations/"

document.addEventListener('DOMContentLoaded', async function() {
    const toolId = 7 //needs to be retrieved dynamically 
    const toolDataResponse = await fetch(toolEndpoint + toolId)
    const toolData = await toolDataResponse.json()

    const locationId = toolData.location_id
    const locationDataResponse = await fetch(locationEndpoint + locationId)
    const locationData = await locationDataResponse.json()

    updateToolInfo(toolData, locationData)
})

const updateToolInfo = (toolData, locationData) => {
    document.getElementById('toolName').textContent = toolData.tool_name

    const imgElement = document.createElement('img')
    imgElement.src = toolData.image_url
    
    document.getElementById('toolImageContainer').appendChild(imgElement)

    document.getElementById('availabilityStatus').textContent = `Status: ${toolData.status.toUpperCase()}`;
    document.getElementById('toolDetails').textContent = toolData.description;

    const addressElement = document.getElementById('address')
    addressElement.textContent = `Address: ${locationData.street_address}`
    const postCodeElement = document.createElement('div')
    postCodeElement.textContent = `Post Code: ${locationData.post_code}`
    addressElement.appendChild(postCodeElement)
}

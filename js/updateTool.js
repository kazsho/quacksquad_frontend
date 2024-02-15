document.addEventListener("DOMContentLoaded", function() {
    // Dummy locations data
    var locations = ["Location 1", "Location 2", "Location 3"];

    var locationSelect = document.getElementById("location");

    // Populate location dropdown
    locations.forEach(function(location) {
        var option = document.createElement("option");
        option.text = location;
        locationSelect.add(option);
    });
});
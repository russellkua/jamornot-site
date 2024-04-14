document.addEventListener("DOMContentLoaded", function() {
    // Load environment variables from .env file
    require('dotenv').config();

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbGt1YSIsImEiOiJjbHV3dzRwYzQwaHczMmlwYmZvOGYyd2lvIn0.nmwaGUMkYE4pxsAlI6kKbw'; // Access token from environment variable
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/russellkua/cluz0xrqb004o01phewerdwcc', // Style URL from environment variable
        center: [103.8198, 1.3521], // Singapore coordinates
        zoom: 12
    });

    // Add markers or other map functionalities here
});
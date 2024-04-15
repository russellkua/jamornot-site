document.addEventListener("DOMContentLoaded", function() {
  // Check if the map container exists
  var mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.error('Map container not found.');
    return;
  }
// Define the geographical boundaries for Singapore
var singaporeBounds = L.latLngBounds(
  L.latLng(1.15, 103.55), // Southwest corner of Singapore
  L.latLng(1.48, 104.05)  // Northeast corner of Singapore
);

// Function to detect if the device is mobile
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Set the default zoom level based on the device type
var defaultZoomLevel = isMobileDevice() ? 11 : 12.5;

// Create the map with restrictions on zooming and panning
var map = L.map('map', {
  minZoom: 11,           // Set the minimum zoom level
  maxBounds: singaporeBounds, // Set the boundaries for panning
  maxBoundsViscosity: 1.0 // Keeps the map within the bounds when dragging
}).setView([1.3521, 103.8198], defaultZoomLevel);

// Add tile layer with dark mode
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 15,
}).addTo(map);
  
  // Define camera locations with coordinates
  const data = [
      {"location": "View from KPE/ECP", "coordinates": [1.29531332, 103.871146]},
      {"location": "View from Kallang Bahru", "coordinates": [1.319541067, 103.8785627]},
      {"location": "View from KPE/PIE", "coordinates": [1.323957439, 103.8728576]},
      {"location": "View from Kallang Way Flyover", "coordinates": [1.319535712, 103.8750668]},
      {"location": "View from Defu Flyover", "coordinates": [1.363519886, 103.905394]},
      {"location": "View from Tampines Flyover", "coordinates": [1.357098686, 103.902042]},
      {"location": "View from TPE(PIE), Exit 2 to Loyang Ave", "coordinates": [1.365434, 103.953997]},
      {"location": "View from TPE(PIE), Tampines Viaduct", "coordinates": [1.3605, 103.961412]},
      {"location": "View from Tanah Merah Coast Road towards Changi", "coordinates": [1.317036, 103.988598]},
      {"location": "View from Maxwell Road", "coordinates": [1.2741439435, 103.8513168025]},
      {"location": "View from Marina Boulevard/Marina Coastal Drive", "coordinates": [1.27135090683, 103.8618284406]},
      {"location": "View from MCE 1.02km", "coordinates": [1.27066408655, 103.8569779434]},
      {"location": "View from MCE/ECP", "coordinates": [1.29409891409, 103.8760561966]},
      {"location": "View from Marina Boulevard", "coordinates": [1.2752977149, 103.8663903818]},
      {"location": "View from Exit 6 to Bukit Timah Road", "coordinates": [1.323604823, 103.8587802]},
      {"location": "View from Braddell Flyover", "coordinates": [1.34355015, 103.8601984]},
      {"location": "View from St George Road", "coordinates": [1.32814722195, 103.862203282]},
      {"location": "View from Entrance from Chin Swee Road", "coordinates": [1.28569398887, 103.8375245102]},
      {"location": "View from Ang Mo Kio Ave 5 Flyover", "coordinates": [1.375925022, 103.8587986]},
      {"location": "View from Bukit Merah Flyover", "coordinates": [1.28036584336, 103.8304511465]},
      {"location": "View from Exit 6 to Bukit Timah Road", "coordinates": [1.31384231655, 103.8456030326]},
      {"location": "View from Ang Mo Kio Ave 1 Flyover", "coordinates": [1.35296, 103.85719]},
      {"location": "View from Woodlands Causeway (Towards Johor)", "coordinates": [1.447023728, 103.7716543]},
      {"location": "View from Woodlands Checkpoint (Towards BKE)", "coordinates": [1.445554109, 103.7683397]},
      {"location": "View from Chantek Flyover", "coordinates": [1.35047790791, 103.7910335813]},
      {"location": "View from Woodlands Flyover (Towards Checkpoint)", "coordinates": [1.429588536, 103.769311]},
      {"location": "View from Dairy Farm Flyover", "coordinates": [1.36728572, 103.7794698]},
      {"location": "View from after KJE Exit", "coordinates": [1.414142, 103.771168]},
      {"location": "View from Mandai Rd Entrance", "coordinates": [1.3983, 103.774247]},
      {"location": "View from Exit 5 to KJE (Towards Checkpoint)", "coordinates": [1.3865, 103.7747]},
      {"location": "View from Entrance from PIE", "coordinates": [1.33831, 103.98032]},
      {"location": "View from Entrance from MCE", "coordinates": [1.29585501566, 103.880314666]},
      {"location": "View from Exit 2A to Changi Coast Road", "coordinates": [1.32743, 103.97383]},
      {"location": "View from Laguna Flyover", "coordinates": [1.309330837, 103.9350504]},
      {"location": "View from Marine Parade Flyover", "coordinates": [1.30145145166, 103.91059632]},
      {"location": "View from Tanjong Katong Flyover", "coordinates": [1.297512569, 103.8983019]},
      {"location": "View from Tanjong Rhu", "coordinates": [1.29565733262976, 103.885283049309]},
      {"location": "View from Benjamin Sheares Bridge", "coordinates": [1.29158484, 103.8615987]},
      {"location": "View from Towards Alexandra Road", "coordinates": [1.2871, 103.79633]},
      {"location": "View from Keppel Viaduct", "coordinates": [1.27237, 103.8324]},
      {"location": "View from Second Link at Tuas", "coordinates": [1.348697862, 103.6350413]},
      {"location": "View from Lower Delta Road", "coordinates": [1.27877, 103.82375]},
      {"location": "View from Entrance from Yuan Ching Rd", "coordinates": [1.32618, 103.73028]},
      {"location": "View from Near NUS", "coordinates": [1.29792, 103.78205]},
      {"location": "View from Entrance from Jln Ahmad Ibrahim", "coordinates": [1.33344648135658, 103.652700847056]},
      {"location": "View from Near Dover Drive", "coordinates": [1.29939, 103.7799]},
      {"location": "View from Clementi Ave 6 Entrance", "coordinates": [1.312019, 103.763002]},
      {"location": "View from Towards Pandan Gardens", "coordinates": [1.32153, 103.75273]},
      {"location": "View from After Tuas West Road", "coordinates": [1.341244001, 103.6439134]},
      {"location": "View from Tuas Checkpoint", "coordinates": [1.347645829, 103.6366955]},
      {"location": "View from Near West Coast Walk", "coordinates": [1.31023, 103.76438]},
      {"location": "View from Entrance from Benoi Rd", "coordinates": [1.32227, 103.67453]},
      {"location": "View from Sentosa Gateway (Towards Telok Blangah)", "coordinates": [1.25999999687243, 103.823611110166]},
      {"location": "View from Sentosa Gateway (Towards Sentosa)", "coordinates": [1.26027777363278, 103.823888890049]},
      {"location": "View from Bedok North", "coordinates": [1.3309693, 103.9168616]},
      {"location": "View from Eunos Flyover", "coordinates": [1.326024822, 103.905625]},
      {"location": "View from Paya Lebar Flyover", "coordinates": [1.322875288, 103.8910793]},
      {"location": "View from Kallang Way", "coordinates": [1.32036078126842, 103.877174116489]},
      {"location": "View from Woodsville Flyover", "coordinates": [1.328171608, 103.8685191]},
      {"location": "View from Kim Keat Link", "coordinates": [1.329334, 103.858222]},
      {"location": "View from Thomson Flyover", "coordinates": [1.328899, 103.84121]},
      {"location": "View from Mount Pleasant", "coordinates": [1.326574036, 103.8268573]},
      {"location": "View from Adam Road", "coordinates": [1.332124, 103.81768]},
      {"location": "View from Bukit Timah Expressway", "coordinates": [1.349428893, 103.7952799]},
      {"location": "View from Nanyang Flyover", "coordinates": [1.345996, 103.69016]},
      {"location": "View from Entrance from Jalan Anak Bukit", "coordinates": [1.344205, 103.78577]},
      {"location": "View from Entrance to PIE from ECP Changi", "coordinates": [1.33771, 103.977827]},
      {"location": "View from Exit 27 to Clementi Ave 6", "coordinates": [1.332691, 103.770278]},
      {"location": "View from Entrance from Simei Ave", "coordinates": [1.340298, 103.945652]},
      {"location": "View from Exit 35 to KJE", "coordinates": [1.361742, 103.703341]},
      {"location": "View from Hong Kah Flyover", "coordinates": [1.356299, 103.716071]},
      {"location": "View from Tuas Flyover", "coordinates": [1.322893, 103.6635051]},
      {"location": "View from Upp Changi Flyover Towards PIE", "coordinates": [1.354245, 103.963782]},
      {"location": "View from Tampines Ave 10 Entrance", "coordinates": [1.37704704, 103.92946983]},
      {"location": "View from TPE(KPE) Exit", "coordinates": [1.37988658, 103.92009174]},
      {"location": "View from Entrance To Tampines Flyover", "coordinates": [1.38432741, 103.91585701]},
      {"location": "View from Exit to Punggol Flyover", "coordinates": [1.39559294, 103.90515712]},
      {"location": "View from Seletar West Link", "coordinates": [1.40002575, 103.85702534]},
      {"location": "View from Seletar Flyover", "coordinates": [1.39748842, 103.85400467]},
      {"location": "View from Choa Chu Kang West Flyover", "coordinates": [1.38647, 103.74143]},
      {"location": "View from Exit To BKE", "coordinates": [1.39059, 103.7717]},
      {"location": "View from Entrance From Choa Chu Kang Dr", "coordinates": [1.3899, 103.74843]},
      {"location": "View from Tengah Flyover", "coordinates": [1.3664, 103.70899]},
      {"location": "View from Lentor Flyover", "coordinates": [1.39466333, 103.83474601]},
      {"location": "View from Upp Thomson Flyover", "coordinates": [1.39474081, 103.81797086]},
      {"location": "View from SLE(BKE) Exit", "coordinates": [1.422857, 103.773005]},
      {"location": "View from Ulu Sembawang Flyover", "coordinates": [1.42214311, 103.79542062]},
      {"location": "View from Marsiling Flyover", "coordinates": [1.42627712, 103.78716637]},
      {"location": "View from Mandai Flyover", "coordinates": [1.41270056, 103.80642712]}
  ]
  ;

  data.forEach(camera => {
    const marker = L.marker(camera.coordinates).addTo(map);
    
    // Detect mobile devices
    if (L.Browser.mobile) {
      // For mobile devices, bind tooltips
      marker.bindTooltip(camera.location);
    } else {
      // For desktop devices, bind popups
      marker.bindPopup(camera.location);
    }
  });
  
  // Update the copyright year
  var currentYear = new Date().getFullYear();
  var copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  } else {
    console.error('Copyright element not found.');
  }
});
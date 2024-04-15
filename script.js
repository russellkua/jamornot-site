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
  var defaultZoomLevel = isMobileDevice() ? 11 : 12;

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
      {"location": "📷 KPE/ECP", "coordinates": [1.29531332, 103.871146]},
      {"location": "📷 Kallang Bahru", "coordinates": [1.319541067, 103.8785627]},
      {"location": "📷 KPE/PIE", "coordinates": [1.323957439, 103.8728576]},
      {"location": "📷 Kallang Way Flyover", "coordinates": [1.319535712, 103.8750668]},
      {"location": "📷 Defu Flyover", "coordinates": [1.363519886, 103.905394]},
      {"location": "📷 Tampines Flyover", "coordinates": [1.357098686, 103.902042]},
      {"location": "📷 TPE(PIE), Exit 2 to Loyang Ave", "coordinates": [1.365434, 103.953997]},
      {"location": "📷 TPE(PIE), Tampines Viaduct", "coordinates": [1.3605, 103.961412]},
      {"location": "📷 Tanah Merah Coast Road towards Changi", "coordinates": [1.317036, 103.988598]},
      {"location": "📷 Maxwell Road", "coordinates": [1.2741439435, 103.8513168025]},
      {"location": "📷 Marina Boulevard/Marina Coastal Drive", "coordinates": [1.27135090683, 103.8618284406]},
      {"location": "📷 MCE 1.02km", "coordinates": [1.27066408655, 103.8569779434]},
      {"location": "📷 MCE/ECP", "coordinates": [1.29409891409, 103.8760561966]},
      {"location": "📷 Marina Boulevard", "coordinates": [1.2752977149, 103.8663903818]},
      {"location": "📷 Exit 6 to Bukit Timah Road", "coordinates": [1.323604823, 103.8587802]},
      {"location": "📷 Braddell Flyover", "coordinates": [1.34355015, 103.8601984]},
      {"location": "📷 St George Road", "coordinates": [1.32814722195, 103.862203282]},
      {"location": "📷 Entrance from Chin Swee Road", "coordinates": [1.28569398887, 103.8375245102]},
      {"location": "📷 Ang Mo Kio Ave 5 Flyover", "coordinates": [1.375925022, 103.8587986]},
      {"location": "📷 Bukit Merah Flyover", "coordinates": [1.28036584336, 103.8304511465]},
      {"location": "📷 Exit 6 to Bukit Timah Road", "coordinates": [1.31384231655, 103.8456030326]},
      {"location": "📷 Ang Mo Kio Ave 1 Flyover", "coordinates": [1.35296, 103.85719]},
      {"location": "📷 Woodlands Causeway (Towards Johor)", "coordinates": [1.447023728, 103.7716543]},
      {"location": "📷 Woodlands Checkpoint (Towards BKE)", "coordinates": [1.445554109, 103.7683397]},
      {"location": "📷 Chantek Flyover", "coordinates": [1.35047790791, 103.7910335813]},
      {"location": "📷 Woodlands Flyover (Towards Checkpoint)", "coordinates": [1.429588536, 103.769311]},
      {"location": "📷 Dairy Farm Flyover", "coordinates": [1.36728572, 103.7794698]},
      {"location": "📷 after KJE Exit", "coordinates": [1.414142, 103.771168]},
      {"location": "📷 Mandai Rd Entrance", "coordinates": [1.3983, 103.774247]},
      {"location": "📷 Exit 5 to KJE (Towards Checkpoint)", "coordinates": [1.3865, 103.7747]},
      {"location": "📷 Entrance from PIE", "coordinates": [1.33831, 103.98032]},
      {"location": "📷 Entrance from MCE", "coordinates": [1.29585501566, 103.880314666]},
      {"location": "📷 Exit 2A to Changi Coast Road", "coordinates": [1.32743, 103.97383]},
      {"location": "📷 Laguna Flyover", "coordinates": [1.309330837, 103.9350504]},
      {"location": "📷 Marine Parade Flyover", "coordinates": [1.30145145166, 103.91059632]},
      {"location": "📷 Tanjong Katong Flyover", "coordinates": [1.297512569, 103.8983019]},
      {"location": "📷 Tanjong Rhu", "coordinates": [1.29565733262976, 103.885283049309]},
      {"location": "📷 Benjamin Sheares Bridge", "coordinates": [1.29158484, 103.8615987]},
      {"location": "📷 Towards Alexandra Road", "coordinates": [1.2871, 103.79633]},
      {"location": "📷 Keppel Viaduct", "coordinates": [1.27237, 103.8324]},
      {"location": "📷 Second Link at Tuas", "coordinates": [1.348697862, 103.6350413]},
      {"location": "📷 Lower Delta Road", "coordinates": [1.27877, 103.82375]},
      {"location": "📷 Entrance from Yuan Ching Rd", "coordinates": [1.32618, 103.73028]},
      {"location": "📷 Near NUS", "coordinates": [1.29792, 103.78205]},
      {"location": "📷 Entrance from Jln Ahmad Ibrahim", "coordinates": [1.33344648135658, 103.652700847056]},
      {"location": "📷 Near Dover Drive", "coordinates": [1.29939, 103.7799]},
      {"location": "📷 Clementi Ave 6 Entrance", "coordinates": [1.312019, 103.763002]},
      {"location": "📷 Towards Pandan Gardens", "coordinates": [1.32153, 103.75273]},
      {"location": "📷 After Tuas West Road", "coordinates": [1.341244001, 103.6439134]},
      {"location": "📷 Tuas Checkpoint", "coordinates": [1.347645829, 103.6366955]},
      {"location": "📷 Near West Coast Walk", "coordinates": [1.31023, 103.76438]},
      {"location": "📷 Entrance from Benoi Rd", "coordinates": [1.32227, 103.67453]},
      {"location": "📷 Sentosa Gateway (Towards Telok Blangah)", "coordinates": [1.25999999687243, 103.823611110166]},
      {"location": "📷 Sentosa Gateway (Towards Sentosa)", "coordinates": [1.26027777363278, 103.823888890049]},
      {"location": "📷 Bedok North", "coordinates": [1.3309693, 103.9168616]},
      {"location": "📷 Eunos Flyover", "coordinates": [1.326024822, 103.905625]},
      {"location": "📷 Paya Lebar Flyover", "coordinates": [1.322875288, 103.8910793]},
      {"location": "📷 Kallang Way", "coordinates": [1.32036078126842, 103.877174116489]},
      {"location": "📷 Woodsville Flyover", "coordinates": [1.328171608, 103.8685191]},
      {"location": "📷 Kim Keat Link", "coordinates": [1.329334, 103.858222]},
      {"location": "📷 Thomson Flyover", "coordinates": [1.328899, 103.84121]},
      {"location": "📷 Mount Pleasant", "coordinates": [1.326574036, 103.8268573]},
      {"location": "📷 Adam Road", "coordinates": [1.332124, 103.81768]},
      {"location": "📷 Bukit Timah Expressway", "coordinates": [1.349428893, 103.7952799]},
      {"location": "📷 Nanyang Flyover", "coordinates": [1.345996, 103.69016]},
      {"location": "📷 Entrance from Jalan Anak Bukit", "coordinates": [1.344205, 103.78577]},
      {"location": "📷 Entrance to PIE from ECP Changi", "coordinates": [1.33771, 103.977827]},
      {"location": "📷 Exit 27 to Clementi Ave 6", "coordinates": [1.332691, 103.770278]},
      {"location": "📷 Entrance from Simei Ave", "coordinates": [1.340298, 103.945652]},
      {"location": "📷 Exit 35 to KJE", "coordinates": [1.361742, 103.703341]},
      {"location": "📷 Hong Kah Flyover", "coordinates": [1.356299, 103.716071]},
      {"location": "📷 Tuas Flyover", "coordinates": [1.322893, 103.6635051]},
      {"location": "📷 Upp Changi Flyover Towards PIE", "coordinates": [1.354245, 103.963782]},
      {"location": "📷 Tampines Ave 10 Entrance", "coordinates": [1.37704704, 103.92946983]},
      {"location": "📷 TPE(KPE) Exit", "coordinates": [1.37988658, 103.92009174]},
      {"location": "📷 Entrance To Tampines Flyover", "coordinates": [1.38432741, 103.91585701]},
      {"location": "📷 Exit to Punggol Flyover", "coordinates": [1.39559294, 103.90515712]},
      {"location": "📷 Seletar West Link", "coordinates": [1.40002575, 103.85702534]},
      {"location": "📷 Seletar Flyover", "coordinates": [1.39748842, 103.85400467]},
      {"location": "📷 Choa Chu Kang West Flyover", "coordinates": [1.38647, 103.74143]},
      {"location": "📷 Exit To BKE", "coordinates": [1.39059, 103.7717]},
      {"location": "📷 Entrance From Choa Chu Kang Dr", "coordinates": [1.3899, 103.74843]},
      {"location": "📷 Tengah Flyover", "coordinates": [1.3664, 103.70899]},
      {"location": "📷 Lentor Flyover", "coordinates": [1.39466333, 103.83474601]},
      {"location": "📷 Upp Thomson Flyover", "coordinates": [1.39474081, 103.81797086]},
      {"location": "📷 SLE(BKE) Exit", "coordinates": [1.422857, 103.773005]},
      {"location": "📷 Ulu Sembawang Flyover", "coordinates": [1.42214311, 103.79542062]},
      {"location": "📷 Marsiling Flyover", "coordinates": [1.42627712, 103.78716637]},
      {"location": "📷 Mandai Flyover", "coordinates": [1.41270056, 103.80642712]}
  ]  
  ;

  data.forEach(camera => {
    const marker = L.marker(camera.coordinates).addTo(map);
  
    if (isMobileDevice()) {
      // For mobile devices, show tooltip and popup on tap
      marker.on('click', function() {
        marker.unbindTooltip(); // Unbind tooltip if it was previously bound
        marker.bindTooltip(camera.location).openTooltip();
      });
    } else {
      // For desktop devices, show tooltip on hover
      marker.bindTooltip(camera.location);
      marker.on('mouseover', function() {
        marker.openTooltip();
      });
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
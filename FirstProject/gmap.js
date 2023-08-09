!<!DOCTYPE html>
<html>
  <head>
    <title>GoogleMap API</title>
  </head>
  <body>
  <script>
    let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
  </script>
  </body>

</html>




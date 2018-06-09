function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: -34.094813, lng: 18.363695}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: -34.09828, lng: 18.363820000000032},
        {lat: -34.097399732719516, lng: 18.377804160118103},
        {lat: -34.097195391352216, lng: 18.378324508666992},
        {lat: -34.099052214344724, lng: 18.38208496570587},
        {lat: -34.09687110947399, lng: 18.372305631637573}
      ]

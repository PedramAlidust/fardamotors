<template>
  <section>
    <div class="container-full">
      <div class="row gx-0">
        <div class="col-lg-6" style="height: 100vh">
          <div id="map" class="mapboxgl-map"></div>
        </div>
        <div class="col-lg-6" style="height: 70vh"></div>
      </div>
    </div>
    {{ lng }}
    <br>
    {{ lat }}
  </section>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

export default {
  data() {
    return {
      lng: 0,
      lat: 0
    };
  },

  methods: {
    async DspMap() {
      // start mapbox
      mapboxgl.accessToken =
        "pk.eyJ1IjoicGVkcmFtYWxpZHVzdCIsImEiOiJja29hNHM4eDEwYWlsMzBveWNhaDlyenRqIn0.ftTSzZXEYdQ4ncFj2gObDA";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [49.8152253, 33.4863121], // starting position [lng, lat]
        zoom: 5, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });
      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });

      mapboxgl.setRTLTextPlugin(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
      );
      map.addControl(
        new MapboxLanguage({
          defaultLanguage: "fa",
        })
      );

      //Add geolocate control to the map
      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      );

      /* add marker to map */
      // Create a new marker.
      const marker = new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat([51.2075706, 35.70779])
        .addTo(map);

      var pedram = this.DspPedram;  

      function onDragEnd() {
        const lngLat = marker.getLngLat();
        pedram(lngLat);
      }

      marker.on("dragend", onDragEnd);
    },
    DspPedram(lngLat) {
     this.lng = lngLat.lng;
     this.lat = lngLat.lat
    }
  },
  mounted() {
    this.DspMap();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#map {
  width: 100%;
  height: 70%;
}
</style>
<template>
  <GmapMap :class="$vuetify.breakpoint.xs ? '' : 'ml-5'" :center="{  lat: parseFloat(start_point.lat),
  lng: parseFloat(start_point.lng), }" :zoom="10" map-type-id="roadmap" :style="
      $vuetify.breakpoint.xs
        ? 'width: 100%; height: 175px;'
        : 'width: 800px; height: 550px'
    ">
    <GmapMarker :position="{
      lat: parseFloat(start_point.lat),
      lng: parseFloat(start_point.lng),
    }" :clickable="true" />
    <GmapMarker :position="{
      lat: parseFloat(finish_point.lat),
      lng: parseFloat(finish_point.lng),
    }" :clickable="true" />
  </GmapMap>
</template>

<script>
export default {
  props: {
    start_point: {
      require: true,
    },
    finish_point: {
      require: true,
    }
  }
};
</script>

<style>

</style>
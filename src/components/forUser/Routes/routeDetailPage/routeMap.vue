<template>
  <GmapMap
    :class="$vuetify.breakpoint.xs ? '' : 'ml-5'"
    :center="{ lat: 48.920551, lng: 24.706484 }"
    :zoom="10"
    map-type-id="roadmap"
    :style="
      $vuetify.breakpoint.xs
        ? 'width: 100%; height: 175px;'
        : 'width: 800px; height: 550px'
    "
  ></GmapMap>
</template>

<script>
export default {};
</script>

<style>
</style>
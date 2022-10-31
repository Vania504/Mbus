<template>
  <div
    :class="$vuetify.breakpoint.xs ? 'mobileTitle' : 'otherTitle'"
    style="width: 100%; text-align: center"
    :style="
      $vuetify.breakpoint.xs
        ? {
            backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/routesBackgroundImg.png')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'norepeat',
            height: '120px',
          }
        : {
            backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(${image ? image : require('@/assets/img/routesBackgroundImg.png')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'norepeat',
            height: '330px',
            backgroundPosition: 'center',
          }
    "
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
    },
    image: {
      require: true,
    },
  },
};
</script>

<style scoped>
.otherTitle {
  color: white;
  left: 0%;
  right: 0%;
  text-align: center;
  padding-top: 10%;
  font-size: 40px;
}
.mobileTitle {
  font-family: "SeoulHangang";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 51px;
  text-align: center;
}
</style>
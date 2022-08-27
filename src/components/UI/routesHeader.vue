<template>
  <div
      style="width: 100%; height: 330px; text-align: center;"
      :style="{
        backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/routesBackgroundImg.svg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
      }"
    >
      <span
        style="
          position: absolute;
          font-size: 40px;
          color: white;
          left: 0%;
          right: 0%;
          margin-top: 10%;
          text-align: center;
        "
        >{{title}}</span
      >
    </div>
</template>

<script>
export default {
    props: {
        title: {
            require: true,
        }
    }
}
</script>

<style>

</style>
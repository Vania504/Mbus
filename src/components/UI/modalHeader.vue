<template>
   <div style="height: 58px; background-color: #243949; align-self: center">
        <v-row justify="start" align="center" no-gutters class="pt-1 px-5"
          ><span style="font-size: 32px; color: white">{{title}}</span>
          <v-row justify="end"
            ><v-icon large color="white" class="pointer" @click="$emit('close')"
              >mdi-close</v-icon
            ></v-row
          ></v-row
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
<template>
    <v-snackbar top v-model="showSnackbar" color="error">
      <v-row align="center">
        <v-icon class="mx-3">mdi-close</v-icon>
        <v-col>
          <span>{{ snackbarText }}</span>
        </v-col>
      </v-row>
    </v-snackbar>
  </template>
  
  <script>
  export default {
    data: () => ({
      showSnackbar: true,
    }),
    props: {
      snackbarText: {
        require: true,
      },
    },
  };
  </script>
  
  <style>
  </style>
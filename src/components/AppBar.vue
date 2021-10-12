<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down mr-5"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>
    <v-btn
      v-for="link in links"
      :key="link.name"
      text
      :to="link.to"
      class="mr-2"
    >
      {{ link.name }}
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  data() {
    return {
      links: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About',
          to: '/about',
        },
      ],
    }
  },
}
</script>

<style></style>

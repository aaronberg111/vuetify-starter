<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Home</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Users</h2>
      </v-col>
      <v-col v-for="{ name, username, email, id } in users" :key="id" md="3">
        <v-card>
          <v-card-title>{{ name }}</v-card-title>
          <v-card-text>
            <div class="mb-2">
              <v-icon left color="blue">mdi-account</v-icon>
              {{ username }}
            </div>
            <div>
              <v-icon left color="blue">mdi-email</v-icon>
              {{ email }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',

  async mounted() {
    await this.getUsers()
  },

  computed: {
    //can see this in vue dev tools in Chrome by clicking 'components' tab and searching for 'Home'
    ...mapState(['users']),
  },

  methods: {
    ...mapActions(['getUsers']),
  },
}
</script>

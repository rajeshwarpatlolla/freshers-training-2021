<template>
  <div>
    <h1>Vuex demo</h1>
    <v-btn color="primary" @click="goToDashboard()">Go to Dashboard</v-btn>
    <div v-for="(user, index) of listOfUsers" :key="index">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VuexDemo',
  data() {
    return {};
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapGetters(['listOfUsers']),
  },
  methods: {
    ...mapActions(['setUsersAction']),
    async getUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setUsersAction(response.data);
      } catch (error) {
        window.console.error(error);
      }
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped lang="sccs"></style>

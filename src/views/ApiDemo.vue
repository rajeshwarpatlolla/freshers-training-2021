<template>
  <div>
    <h1>TODOs</h1>

    <v-btn color="primary" @click="addToDoItem()">Add TODO</v-btn>
    <div v-if="loading">Please wait while we load data...</div>
    <div v-else>
      <div v-if="todos.length === 0">No TODOs exists</div>
      <div v-else>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(todo, i) in todos" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
                <img :src="todo.thumbnailUrl" alt="" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApiDemo',
  data() {
    return {
      loading: false,
      todos: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async addToDoItem() {
      try {
        const payload = {
          id: 10,
          title: 'this is created by me',
          body: 'this is created by me',
          userId: 1,
        };
        await axios.post('https://jsonplaceholder.typicode.com/photos', payload);
      } catch (error) {
        window.console.log(error);
      }
    },
    async getData() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        this.todos = response.data;
        this.loading = false;
      } catch (error) {
        window.console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 40px;
}
</style>

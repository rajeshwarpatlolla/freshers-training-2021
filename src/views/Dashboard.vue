<template>
  <div class="dashboard-page">
    <Header />

    <h1 :class="{ redText: colorVal === 1, greenText: colorVal === 2 }">
      Demo of dynamic class
    </h1>
    <button @click="changeColor(1)">Change To Red</button>
    <button @click="changeColor(2)">Change To Green</button>

    <h1 :style="{ background: color }">
      Demo of dynamic style
    </h1>
    <button @click="changeStyle('red')">Change To Red Background</button>
    <button @click="changeStyle('green')">Change To Green Background</button>

    <div v-for="(user, index) of listOfUsers" :key="index">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from '../components/Header.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      colorVal: null,
      color: null,
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['listOfUsers']),
  },
  methods: {
    changeColor(val) {
      this.colorVal = val;
    },
    changeStyle(color) {
      this.color = color;
    },
  },
};
</script>

<style scoped lang="scss">
.redText {
  color: red;
}
.greenText {
  color: green;
}
</style>

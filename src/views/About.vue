<template>
  <div class="about-page">
    <div class="main-content">
      <h1>This is an about page</h1>
      <h2>This is an about page</h2>
      <h3>This is an about page</h3>
    </div>
    <h1>{{ user }}</h1>
    <button @click="loginUser()">Login User</button>
  </div>
</template>

<script>
import mixin from '../components/mixin.vue';

export default {
  name: 'About',
  mixins: [mixin],
};
</script>

<style scoped lang="scss">
$redColor: #f00;

.about-page {
  .main-content {
    h1 {
      color: $redColor;
    }
    h2 {
      color: blue;
    }
    h3 {
      color: green;
    }
  }
}
</style>

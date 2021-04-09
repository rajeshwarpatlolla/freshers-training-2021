<template>
  <div class="header">
    <div class="inline_block">APP Name</div>
    <div class="inline_block text-right">
      {{ name }}
      <span v-if="!user">
        <button @click="loginUser()">Login</button>
      </span>
      <span v-else>
        {{ user.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: {
      type: String,
      default: 'No Page Name',
    },
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    loginUser() {
      this.user = { name: 'Rajeshwar' };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(92, 100, 196);
  border-bottom: 1px solid #aaa;
  height: 48px;
}
.text-right {
  text-align: right;
}
.inline_block {
  display: inline-block;
  width: 50%;
}
</style>

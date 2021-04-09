<template>
  <div class="home">
    <Header name="Home" />

    <div class="main_content">
      <h1>Home</h1>
      <h2>Today's Date is : {{ todayDate }}</h2>

      <div>
        <input type="number" v-model="val" />
        {{ valChange }}
      </div>

      <button @click="goToDashboard()">Go to Dashboard</button>
      <div v-if="loading">Please wait, while we load the data...</div>
      <div v-else>
        <div v-if="students.length > 0">
          <div v-for="(student, index) of students" :key="index">
            {{ student.name }} - {{ student.age }}
          </div>
        </div>
        <div v-else>No students available</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      val: 12,
      students: [],
      loading: false,
      valChange: null,
    };
  },
  computed: {
    todayDate() {
      const d = new Date();
      const date = d.getDate();
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
      return `${date}-${month}-${year}`;
    },
  },
  watch: {
    val(current, prev) {
      window.console.log(current, prev);
      this.valChange = current > prev ? 'Increased' : 'Decreased';
    },
  },
  beforeCreate() {
    window.console.log('beforeCreate');
  },
  created() {
    window.console.log('created');
  },
  beforeMount() {
    window.console.log('beforeMount');
  },
  mounted() {
    window.console.log('mounted');
    window.console.log(this.todayDate);
    this.getStudents();
  },
  beforeUpdate() {
    window.console.log('beforeUpdate');
  },
  updated() {
    window.console.log('updated');
  },
  beforeDestroy() {
    window.console.log('beforeDestroy');
  },
  destroyed() {
    window.console.log('destroyed');
  },
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    getStudents() {
      this.loading = true;

      // api call here

      setTimeout(() => {
        this.students = [
          { name: 'sanjay', age: 11 },
          { name: 'aman', age: 12 },
          { name: 'kamal', age: 13 },
          { name: 'raj', age: 14 },
        ];
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

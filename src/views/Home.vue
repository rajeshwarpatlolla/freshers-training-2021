<template>
  <div class="home">
    <Header name="Home" />

    <div class="main_content">
      <h1>Home</h1>
      <h2>Today's Date is : {{ todayDate }}</h2>

      <v-alert border="top" color="red lighten-2" dark>
        I'm an alert with a top border and red color
      </v-alert>

      <v-btn depressed>
        Normal
      </v-btn>
      <v-btn depressed color="primary">
        Primary
      </v-btn>

      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        <v-card-title>Sample Card</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
            seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>

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

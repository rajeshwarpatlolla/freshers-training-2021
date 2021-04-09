<script>
export default {
  name: 'Mixin',
  data() {
    return {
      user: 'Rajeshwar',
    };
  },
  mounted() {
    window.console.log('mounted');
  },
  methods: {
    loginUser() {
      window.console.log('loginUser');
    },
  },
};
</script>

<template>
  <user-account @login="loggedIn()"></user-account>
</template>

<script>
import UserAccount from '@/components/UserAccount.vue';

export default {
  name: 'Login',
  components: {
    UserAccount,
  },

  data() {
    return {
      userLoggedIn: false
    };
  },

  methods: {
    loggedIn() {
      // Do something when logged in.
      console.log("test2");
      this.$router.push('/');
    },
  },
};
</script>

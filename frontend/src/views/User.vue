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
  methods: {
    loggedIn() {
      // once logged in.
      this.$router.push('/');
    },
  },
};
</script>

<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bruce-warrington-unsplash.jpg" height="500">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Diversitechnologies</h1>
              <h1 class="font-weight-light">
                Scheduling and Boat status logging system <br />
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="loggedInpage()"
                class="mt-5"
                v-show="!islogged"
              >
                Login now
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-parallax>
  <About />
  </section>
</template>
<script>
import About from "@/views/About.vue";
import { mapGetters } from 'vuex';
export default {
  name: "Landing",
    components: {
    About
  },
  methods: {
  loggedInpage() {
    this.$router.push('/user');
  },
  },
  computed: {
    ...mapGetters({
    islogged: 'authStore/getIsLoggedIn',
  })
  },
};
</script>
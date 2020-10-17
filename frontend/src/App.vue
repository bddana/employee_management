<template>
    <v-app>
        <Navbar/>
        <v-content class="grey darken-4 d-flex" dark>
            <router-view></router-view>
       </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
    }
  },
};
</script>
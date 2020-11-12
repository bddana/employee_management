<template>
    <v-app>
        <Navbar/>
        <v-content>
            <router-view></router-view>
       </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    components: { Navbar },
    
    // async created() {
    //     await this.$store.dispatch('authStore/initiateAppSession');
    //     if (this.isSessionActive) {
    //         //this.initiateApp();
    //     } else {
    //         //TODO: reset user data here
    //     }
    // },
    data () {
        return {
            isLoading: false,
    }
  },
};
</script>
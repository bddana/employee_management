<template>
    <v-app>
        <v-content>
            <Navbar/>
            <router-view></router-view>
            <Footer-Bar/>
       </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import FooterBar from '@/components/FooterBar';
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    components: { Navbar, FooterBar },
    
    async created() {
        await this.$store.dispatch('authStore/initiateAppSession');
    },
    data () {
        return {
            isLoading: false,
    }
  },
};
</script>
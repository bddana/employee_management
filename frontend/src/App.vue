<template>
    <v-app>
        <v-main>
<div  v-if="role=='Captain'">
    <NavbarUser/>
</div>

<div  v-else-if="role=='Manager'">
  <NavbarManager/>
</div>
<div v-else>
    <Navbar/>
</div>

            <router-view></router-view>
            <Footer-Bar/>
       </v-main>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import NavbarUser from '@/components/NavbarUser';
import NavbarManager from '@/components/NavbarManager';
import FooterBar from '@/components/FooterBar';
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    // inject:['reload'],
    components: { 
        Navbar, 
        NavbarUser, 
        NavbarManager, 
        FooterBar 
        },
    
    async created() {
        await this.$store.dispatch('authStore/initiateAppSession');
    },
    data () {
        return {
            isLoading: false,
    }},
    computed: {
        ...mapGetters({
            islogged: 'authStore/getIsLoggedIn',
            role: 'authStore/getRole',
        })
    },
};
</script>
<template>
<div  v-if="role=='Captain'">
    <userCalendar></userCalendar>

</div>

<div  v-else-if="role=='Manager'">
    <managerCalendar></managerCalendar>
    <event-form></event-form>
    <notifications></notifications>
</div>
<div v-else>
    <landing></landing>
</div>
<!-- <v-row>
<calendar2></calendar2>
<calendar></calendar>
<event-form></event-form>
<notifications></notifications>
</v-row> -->

</template>

<script>
import Landing from '@/views/Landing'
import managerCalendar from '@/components/managerCalendar'
import userCalendar from '@/components/userCalendar'
import EventForm from '@/components/EventForm'
import Notifications from '@/components/Notifications'
import { mapGetters } from 'vuex';

export default {
    name: 'schedule',

    components: {
        Landing,
        managerCalendar,
        userCalendar,
        EventForm,
        Notifications    
    },

    data: () => ({

    }),
    computed: {
    ...mapGetters({
      role: 'authStore/getRole',
    }),
  },
};
</script>

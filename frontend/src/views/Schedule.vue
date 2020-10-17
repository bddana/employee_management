<template>
<div>
    <calendar></calendar>
    <event-form></event-form>
    <notifications></notifications>
</div>
</template>

<script>
import Calendar from '@/components/Calendar'
import EventForm from '@/components/EventForm'
import Notifications from '@/components/Notifications'

export default {
    name: 'schedule',

    components: {
        Calendar,
        EventForm,
        Notifications    
    },

    data: () => ({

    }),
};
</script>

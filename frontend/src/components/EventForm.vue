<template>
    <v-row justify="end">
        <v-dialog
            v-model="dialog"
            width="80%"
            :fullscreen="$vuetify.breakpoint.xsOnly"
            @click:outside="clearForm"
        >
            <v-card class="pa-4">
                <v-form ref="form" v-model="valid">
                    <v-card-title>
                        <span
                            class="headline"
                        >{{ formTitle }}</span>
                    </v-card-title>
                    <v-container>
                        <v-combobox
                        color="blue-grey lighten-2"
                        v-model="nameInput"
                        :items="shifts"
                        label="Select Schedule shift"
                        outlined
                        dense
                        ></v-combobox>
                        <v-combobox
                        color="blue-grey lighten-2"
                        v-model="durationInput"
                        :items="shiftDuration"
                        label="Select Schedule duration"
                        outlined
                        dense
                        ></v-combobox>

                        <v-autocomplete
                        v-model="selectedemployee"
                        outlined
                        :items="employees"
                        chips
                        color="blue-grey lighten-2"
                        label="Select employee"
                        item-text="item.firstName item.lastName"
                        multiple
                        dense
                        >
                            <template v-slot:selection="data">
                                <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                @click="data.select"
                                >
                                {{ data.item.firstName }} {{ data.item.lastName }}
                                </v-chip>
                            </template>
                            <template v-slot:item="data">
                                <template v-if="typeof data.item !== 'object'">
                                <v-list-item-content v-text="data.item"></v-list-item-content>
                                </template>
                                <template v-else>
                                <v-list-item-content>
                                    <v-list-item-title v-html="data.item.firstName + ' ' + data.item.lastName" ></v-list-item-title>
                                </v-list-item-content>
                                </template>
                            </template>
                        </v-autocomplete>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="primary"
                            text
                            @click="clearForm"
                        >cancel</v-btn>
                        <v-btn 
                            color="primary" 
                            text 
                            :disabled="!valid" 
                            @click="submitForm"
                    >Submit</v-btn>
                </v-card-actions>
            </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import EventService from '@/services/EventService'
import ScheduleService from '@/services/scheduleService'
import DateArithmetic from '@/services/DateArithmetic'

import { bus } from '@/main'

export default {
    data: () => ({
        componentColor: 'primary',
        originalEditedEvent: {},

        formTitle: 'Add New Schedule',
        selectedemployee: [],
        employees: [],
        nameInput: '',
        shifts: ['10am Shift', '11am Shift', '3pm Shift'],
        durationInput:'',
        shiftDuration: [
            '3 hours', 
            '4 hours', 
            '5 hours',
            '6 hours',
            '7 hours',
            '8 hours',
            '9 hours',
            '10 hours',
            ],

        selectedDate: '',

        dates:{
            start: '',
            end: ''
        },

        times: {
            start: null,
            end: null
        },

        startTime: '',
        endTime: '',

        selectedColor: "primary",

        scheduleId: undefined,

        editDialog: false,
        dialog: false,
        
        valid: false,
        rules: {
            required: v => !!v || 'Required',
            nonWhiteSpaces: v => { 
                const regEx = /\S+/ //any non white space character
                return regEx.test(v) || 'Invalid, Please enter more than just spaces.'
            },

        }
    }),
    methods : {
        async refreshEmployee() {
            this.$http.get('/employee').then(res => {
                console.log(res.data);
                this.employees = res.data;
            })
        },

// insert into database here
        submitForm(){
            console.log(this.currEvent);
            if(this.editDialog){
                ScheduleService.updateSchedule(this.currEvent)
                // EventService.addOrUpdate(this.currEvent)
                this.sendEditedEventNotification(`Successfully edited event "${this.currEvent.name}!"`)
            } else {    
                ScheduleService.addSchedule(this.currEvent)
                // EventService.addOne(this.currEvent)
                this.sendAddedEventNotification(`Successfully added event "${this.currEvent.name}"!`)
            }
            this.clearForm()
            bus.$emit('refreshEvents') 
        },
        openEditDialog(){
            this.editDialog = true
        },
        editEvent(){
            this.formTitle = `Edit Schedule "${this.currEvent.name}"`
            this.originalEditedEvent = this.currEvent
            this.dialog = true
        },
        setColor(colorObject){
            this.color = colorObject.hex
        },
        clearForm(){
            this.dialog = false
            this.editDialog = false

            this.formTitle = "Add a New Schedule"

            this.scheduleId = undefined
            this.selectedColor = "primary"

            this.resetTextInputFields()
            this.$refs.form.resetValidation()
        },

        resetTextInputFields(){
            this.nameInput = ''
            this.durationInput = ''
            this.selectedemployee = ''
        },

        setToday(){
            const today = new Date().toISOString().substr(0,10)
            this.dates.start = today
            this.dates.end = today
            this.selectedDate = today
        },
        setStartTime(time){
            this.times.start = time
        },
        sendAddedEventNotification(message){
            bus.$emit('success', {
                message,
                timeout: 7000
            })
        },
        sendEditedEventNotification(message){
            bus.$emit('success', {
                message,
                timeout: 7000
            })
        },
        sendErrorMessage(message){
            bus.$emit('sucess', {
                message,
                timeout:7000
            })
        },
        setDurationToOneDay(){
            this.dates = {
                ...this.dates,
                end: this.dates.start   
            }
        },
    },
    created(){
        this.setToday()
        this.refreshEmployee()
        bus.$on('sendSelectedDate', date => {
            this.selectedDate = date
            this.dates = {
                start:date,
                end:date
            }
        })
        bus.$on('openForm', () => this.dialog = true)
        bus.$on('editEvent', event => {
            this.editDialog = true
            this.currEvent = event
            console.log("edit Event" + JSON.stringify(this.currEvent))
            this.editEvent()
        })

    },
    computed: {
        isLongerThanOneDay(){
            return this.dates.start !== this.dates.end
        },
        isEditing(){
            return !!this.currEvent.scheduleId
        },
        startTimeAutocomplete(){
            if(!this.times.start && this.times.end){
                return " 00:00"
            } else if(!this.times.start && !this.times.end){
                return ''
            } else {
                return ' ' + this.times.start
            }
        },
        endTimeAutocomplete(){

            if(this.times.start && !this.times.end){
                return " 23:59"
            } else if(!this.times.start && !this.times.end){
                return ''
            }else{
                return ' ' + this.times.end
            }
        },

        startDateAndTime:{
            get(){
                return this.dates.start + this.startTimeAutocomplete
            },
            set(newDateAndTime){
                const [date,time] = newDateAndTime.split(' ')
                this.dates = {
                    ...this.dates,
                    start: date
                }
                if(time) {
                    this.times = {
                        ...this.times,
                        start: time
                    }
                }
            }
        },
        endDateAndTime:{
            get(){
                    return this.dates.end + this.endTimeAutocomplete
            },
            set(newDateAndTime){
                const [date,time] = newDateAndTime.split(' ')
                this.dates = {
                    ...this.dates,
                    end: date
                }
                if(time){
                    this.times = {
                        ...this.times,
                        end: time
                    }
                } 
            }
        },
        currEvent:{
            get(){
                    const event = {
                        name: this.nameInput,
                        duration: this.durationInput,
                        start: this.startDateAndTime,
                        end: this.endDateAndTime,
                        scheduleId: this.scheduleId,
                        color: this.selectedColor,
                        employee: this.selectedemployee,
                    }
                    return event
            },
            set(newEvent){
                this.nameInput = newEvent.name
                this.durationInput = newEvent.duration
                this.startDateAndTime = newEvent.start
                this.endDateAndTime = newEvent.end
                this.scheduleId = newEvent.scheduleId
                this.selectedColor = newEvent.color
                this.selectedemployee = newEvent.employee
            }
        },
    }

}
</script>

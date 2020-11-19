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
                        v-model="nameInput"
                        :items="shifts"
                        label="Schedule shift"
                        outlined
                        dense
                        ></v-combobox>

                        <v-combobox
                        v-model="selectedemployee"
                        :items="items"
                        label="Add employee"
                        multiple
                        outlined
                        dense
                        ></v-combobox>

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
                    >Save</v-btn>
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

        formTitle: 'Add a New Schedule',
        selectedemployee: ['Hamish'],
        shifts: ['10am Shift', '11am Shift', '3pm Shift'],
        items: ['Hamish', 'Bev', 'Arly', 'Wally', 'Evelina', 'Mercedes', 'Neille'],
        nameInput: '',

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

        id: undefined,

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
        addscheduledemployee(){
            scheduledEmployees.push({
                name:"lil",
            });
        },
        removescheduledemployee(){
            scheduledEmployees.push({
                name:"lil",
            });
        },

// insert into database here
        submitForm(){
            if(this.isEditing){
                ScheduleService.addSchedule(this.currEvent)
                EventService.addOrUpdate(this.currEvent)
                this.sendEditedEventNotification(`Successfully edited event "${this.currEvent.name}!"`)
            } else {    
                ScheduleService.addSchedule(this.currEvent)
                EventService.addOne(this.currEvent)
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

            this.formTitle = "Add a New Schedule"

            this.id = undefined
            this.selectedColor = "primary"

            this.resetTextInputFields()
            this.resetTimePickers()
            this.$refs.form.resetValidation()
        },

        resetTextInputFields(){
            this.nameInput = ''
        },
        resetTimePickers(){
            this.times = {
                start: '',
                end: ''
            }
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
        bus.$on('sendSelectedDate', date => {
            this.selectedDate = date
            this.dates = {
                start:date,
                end:date
            }
        })
        bus.$on('openForm', () => this.dialog = true)
        bus.$on('editEvent', event => {
            this.currEvent = event
            this.editEvent()
        })

    },
    computed: {
        isLongerThanOneDay(){
            return this.dates.start !== this.dates.end
        },
        isEditing(){
            return !!this.currEvent.id
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
                        start: this.startDateAndTime,
                        end: this.endDateAndTime,
                        id: this.id,
                        color: this.selectedColor,
                    }
                    return event
            },
            set(newEvent){
                this.nameInput = newEvent.name
                this.startDateAndTime = newEvent.start
                this.endDateAndTime = newEvent.end
                this.id = newEvent.id
                this.selectedColor = newEvent.color
            }
        },
    }

}
</script>

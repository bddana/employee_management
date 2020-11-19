<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="86vh">
        <v-card ref="form">
          <v-card-title>
            Vacation Requested </v-card-title>
          <v-card-text>
            <v-btn  outlined color="primary" @click="messages++"> + </v-btn>
              <v-badge overlap
                :content="messages"
                :value="messages"
                color="primary"
              >
                <v-btn 
                color="primary" 
                @click="messages = 0"
                class="ma-2"
                outlined>
                  vacation request
                </v-btn>
              </v-badge>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-divider></v-divider>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="15"
          :type="type"
          :short-intervals="true"
          :interval-count="12"
          :interval-minutes="120"
          @click:event="showEvent"
          @click:day="openFormAndSendDay"
          @click:more="viewDayOrOpenForm"
          @click:date="viewDayOrOpenForm"
          @click:time="viewDayOrOpenForm"
          @change="updateRange"
        >
        </v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon @click="editEvent(selectedEvent)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="deleteDialog = true">
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-dialog v-model="deleteDialog" width="70%">
                <v-card>
                  <v-card-title>Delete {{ selectedEvent.name }} ?</v-card-title>
                  <v-card-text>Are you sure you want to delete?</v-card-text>
                  <v-card flat class="d-flex ma-0 pa-3">
                    <v-btn @click="deleteDialog = false" text color="primary">
                      Close
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="deleteSelectedEvent(selectedEvent)"
                      text
                      color="primary"
                    >
                      Delete
                    </v-btn>
                  </v-card>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="employee in scheduledEmployees"
                  :key="employee"
                >
                  <v-list-item-avatar>
                    <v-icon class="grey lighten-1" dark> mdi-account </v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="employee"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import EventService from "@/services/EventService";
import ScheduleService from "@/services/scheduleService";
import { bus } from "@/main";

export default {
  data: () => ({
    messages: 1, //temp
    show: false, //temp
    scheduledEmployees: [
      "Hamish",
      "Bev",
      "Arly",
      "Wally",
      "Evelina",
      "Mercedes",
      "Neille",
    ],
    deleteDialog: false,
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
  }),

  mounted() {
    this.$refs.calendar.checkChange();
    this.$refs.calendar.move(1);
    this.$refs.calendar.move(0);
  },
  methods: {
    openFormAndSendDay(day) {
      this.sendDate(day);
      bus.$emit("openForm");
    },
    sendDate(dayAndTime) {
      bus.$emit("sendSelectedDate", dayAndTime.date);
    },

    //read all from the database
    refreshEvents() {
      // this.events = EventService.getAll();
      console.log("test")
      // console.log(EventService.getAll());
      // console.log(ScheduleService.getAllSchedule());

      this.events = ScheduleService.getAllSchedule();
      console.log("test2")

    },

    deleteSelectedEvent(event) {
      EventService.deleteEvent(event, "id");
      bus.$emit("success", {
        message: `Successfully deleted event "${event.name}"`,
        timeout: 5000,
      });
      this.deleteDialog = false;
      this.selectedOpen = false;
      this.refreshEvents();
    },

    editEvent(event) {
      bus.$emit("editEvent", event);
    },


    viewDayOrOpenForm(dayAndTime) {
      this.focus = dayAndTime.date;
      bus.$emit("sendSelectedDate", dayAndTime.date);
      if (this.type === "day") {
        bus.$emit("openForm");
      }
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
  },
  created() {
    this.refreshEvents();
    bus.$on("refreshEvents", () => this.refreshEvents());
  },
  watch: {
    focus() {
      bus.$emit("sendSelectedDate", this.focus);
    },
  },
};
</script>
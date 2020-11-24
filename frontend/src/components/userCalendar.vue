<template>
      <v-sheet>
  <v-row class="fill-height">
    <v-col  cols="auto" >
      <v-sheet height="86vh">
        <validation-observer ref="observer" v-slot="{ invalid }">
        <v-card ref="form" outlined elevation="10" >
          <v-card-title> Request vacation </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="submit">

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="vacationstartdate"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                                   <validation-provider
                        v-slot="{ errors }"
                        name="Start Date"
                        rules="required"
                      >
                <v-combobox
                  outlined
                  dense
                  v-model="vacationstartdate"
                  chips
                  small-chips
                  label="Pick start date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                                required
              :error-messages="errors"
                ></v-combobox>
            </validation-provider>

              </template>
              <v-date-picker v-model="vacationstartdate"  no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(vacationstartdate)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="vacationenddate"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                                             <validation-provider
                        v-slot="{ errors }"
                        name="End Date"
                        rules="required"
                      >
                <v-combobox
                  outlined
                  dense
                  v-model="vacationenddate"
                  chips
                  small-chips
                  label="Pick end date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                                                  required
              :error-messages="errors"
                ></v-combobox>
            </validation-provider>

              </template>
              <v-date-picker v-model="vacationenddate"  no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu1 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu1.save(vacationenddate)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
                                                         <validation-provider
                        v-slot="{ errors }"
                        name="Reason"
                        rules="required"
                      >
        <v-combobox
          v-model="reason"
          :items="vacationTypes"
          label="Reason"
          outlined
          dense
                              required
              :error-messages="errors"
        ></v-combobox>
            </validation-provider>

        </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn :disabled="invalid" color="primary" text @click="submitVacation"> Submit </v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-list-item
            v-for="(vacation,i) in vacations"
            :key="i"
          >
          <v-list-item-content> 
            <v-list-item-title v-text="vacation.vacationType"></v-list-item-title>
            <v-list-item-subtitle v-text="vacation.vacationStartDate +' to '+ vacation.vacationEndDate"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="'Status:'+vacation.vacationStatus"></v-list-item-subtitle>
          </v-list-item-content>
    
          </v-list-item>
        </v-card>
        </validation-observer>
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
          @click:more="viewDay"
          @click:date="viewDay"
          @change="refreshEvents"
        ></v-calendar>


        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
        <validation-observer ref="observer" v-slot="{ invalid }">

          <v-card color="grey lighten-4" min-width="350px" flat
          v-if="!this.selectedEvent.unableToCome"
          ref="form"
          >
            <v-toolbar :color="selectedEvent.color" dark>
              <v-toolbar-title v-html="selectedEvent.name+' for '+selectedEvent.duration"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <h2>I cannot come for this schedule</h2>
            </v-card-text>
                                                                     <validation-provider
                        v-slot="{ errors }"
                        name="Reason"
                        rules="required"
                      >
            <v-text-field
            v-model="reason_not_to_work"
              outlined
              color="primary"
              label="Reason"
              placeholder="I am not feeling well"
              required
              :error-messages="errors"
            ></v-text-field>
             </validation-provider>
            <v-card-actions>
              <v-btn text @click="selectedOpen = false">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="submitchangeForm"> Submit </v-btn>
            </v-card-actions>
          </v-card>
            <v-card color="grey lighten-4" min-width="350px" flat
            v-else>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-toolbar-title v-html="selectedEvent.name+' for '+selectedEvent.duration"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <h2>Schedule change has been requested</h2>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="selectedOpen = false"> Ok </v-btn>
            </v-card-actions>
          </v-card>
          </validation-observer>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
  </v-sheet>
</template>

<script>
import { bus } from "@/main";
import ScheduleService from "@/services/scheduleService";
import { mapGetters } from "vuex";
import {
  required,
  digits,
  email,
  max,
  min,
  regex,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});
extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
    components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    select: [],
    reason: "",
    vacations: [],
    vacationTypes: [
      "Travel",
      "Sick",
      "Appointment",
      "Attending event",
      "Personal Issue",
      "Emergency",
    ],
    vacationStatus: [
      "New Request",
      "Pending",
      "Approved",
      "Declined",
      "Canceled",
      "Closed",
    ],
    reason_not_to_work: "",
    formHasErrors: false,

    vacationstartdate: "",
    vacationenddate: "",
    menu: false,
    menu1: false,
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ["green"],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    submitchangeForm() {
      console.log(this.selectedEvent);
      this.selectedEvent.color = "secondary";
      this.selectedEvent.unableToCome = true;
      this.selectedEvent.unableToCome_reason = this.reason_not_to_work;
      this.$http.post("/schedule/cantwork", this.selectedEvent);
      this.selectedOpen = false;
    },
    submitVacation() {
      this.$http
        .post("/vacation/add", {
          email: this.email,
          reason: this.reason,
          start: this.vacationstartdate,
          end: this.vacationenddate,
          status: this.vacationStatus[0],
        })
        .then((res) => {
          this.refreshVacations();
        });
      console.log(this.reason);
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
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
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },

    refreshVacations() {
      this.$http
        .post("/vacation/one", {
          email: this.email,
        })
        .then((res) => {
          console.log(res.data);
          this.vacations = res.data;
        });
      // this.$forceUpdate();
    },
    async refreshEvents() {
      console.log("refresh" + this.email);
      this.events = await this.$store.dispatch(
        "userscheduleStore/getAllSchedule",
        {
          email: this.email,
        }
      );
    },
  },
  computed: {
    ...mapGetters({
      email: "authStore/getEmail",
    }),
  },
  created() {
    this.refreshVacations();
    this.refreshEvents();
    bus.$on("refreshEvents", () => this.refreshEvents());
  },
};
</script>
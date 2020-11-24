<template>
  <v-card>
    <v-tabs centered>
      <v-tab>Login</v-tab>
      <v-tab> Register</v-tab>

      <v-tab-item v-for="n in 2" :key="n">
        <v-main>
          <v-container>
            <div v-if="n == 1">
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-card width="400" class="mx-auto mt-5" ref="form">
                  <v-card-text>
                    <v-form @submit.prevent="submit">
                      <validation-provider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                      >
                        <v-text-field
                          label="Enter Email"
                          placeholder="john@gmail.com"
                          prepend-icon="mdi-email"
                          v-model="email"
                          :error-messages="errors"
                          :rules="[() => !!email || 'This field is required']"
                          :state="emailState"
                          required
                        />
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required|max:10|min:3"
                      >
                        <v-text-field
                          :type="showPassword ? 'text' : 'password'"
                          label="Enter Password"
                          prepend-icon="mdi-lock"
                          v-model="password"
                          :append-icon="
                            showPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          @click:append="showPassword = !showPassword"
                          :counter="10"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      :disabled="invalid"
                      color="primary"
                      @click="loginClicked()"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </validation-observer>
            </div>
            <div v-else>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <v-card width="400" class="mx-auto mt-5" ref="form">
                  <v-card-text>
                    <v-form>
                      <validation-provider
                        v-slot="{ errors }"
                        name="First Name"
                        rules="required"
                      >
                        <v-text-field
                          label="First Name"
                          prepend-icon="mdi-account-circle"
                          v-model="firstname"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Last Name"
                        rules="required"
                      >
                        <v-text-field
                          label="Last Name"
                          prepend-icon="mdi-account-circle"
                          v-model="lastname"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                      <v-text-field
                        prepend-icon="mdi-briefcase-account"
                        value="Capitain"
                        label="Job Title"
                        readonly
                      />
                      <validation-provider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                      >
                        <v-text-field
                          label="Email"
                          prepend-icon="mdi-email"
                          v-model="email"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Phone Number"
                        :rules="{
                          required: true,
                          digits: 10,
                        }"
                      >
                        <v-text-field
                          label="Phone"
                          prepend-icon="mdi-card-account-phone"
                          v-model="phone"
                          :counter="10"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>

                      <validation-provider
                        v-slot="{ errors }"
                        name="Address"
                        rules="required"
                      >
                        <v-text-field
                          label="address"
                          prepend-icon="mdi-home-map-marker"
                          v-model="address"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required|max:10|min:3"
                      >
                        <v-text-field
                          :type="showPassword ? 'text' : 'password'"
                          label="Enter Password"
                          prepend-icon="mdi-lock"
                          :append-icon="
                            showPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          @click:append="showPassword = !showPassword"
                          v-model="password"
                          :counter="10"
                          :error-messages="errors"
                          required
                        />
                      </validation-provider>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      :disabled="invalid"
                      color="primary"
                      @click="registerClicked()"
                      >Register</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </validation-observer>
            </div>
          </v-container>
        </v-main>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import moment from "moment";
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
  name: "UserAccount",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      showPassword: false,
      role: "Captain",
      items: ["Captain"],
      errorMessages: "",
      formHasErrors: false,
      firstname: "",
      lastname: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
        // v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phone: "",
      address: "",
      password: "",
    };
  },

  computed: {
    form() {
      return {
        email: this.email,
      };
    },
    emailState() {
      if (this.email.length === 0) return null;
      return this.validEmail(this.email);
    },
  },

  methods: {
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    async loginClicked() {
      try {
        console.log("test");
        const data = await this.$store.dispatch("authStore/login", {
          email: this.email,
          password: this.password,
        });
        this.$emit("login");
        // if (this.usernameState) {
        //   this.$emit('login', {
        //     email: this.username,
        //     password: this.password,
        //   });
        // }
        console.log("success");
      } catch (err) {
        console.log(err, "fail here");
      }
    },

    async registerClicked() {
      try {
        console.log(this.role);
        await this.$store.dispatch("authStore/registerUser", {
          firstName: this.firstname,
          lastName: this.lastname,
          role: this.role,
          phone: this.phone,
          address: this.address,
          email: this.email,
          password: this.password,
        });
        console.log("success register");
        this.$emit("register");
      } catch (err) {
        console.log("Error **register**", err);
      }
    },
  },
};
</script>
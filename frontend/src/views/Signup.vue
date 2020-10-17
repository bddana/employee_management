<template>
    <v-card width="400" class="mx-auto mt-5" dark>
      <v-card-title class="pb-0">
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="First Name" 
            prepend-icon="mdi-account-circle"
          />
                    <v-text-field 
            label="Last Name" 
            prepend-icon="mdi-account-circle"
          />
                    <v-text-field 
            label="Job Title" 
            prepend-icon="mdi-account-circle"
          />

          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Confirm Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Confirm Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary">Register</v-btn>
        <v-btn color="secondary">Already Registered</v-btn>
      </v-card-actions>
    </v-card>
</template>

<template>
  <v-card>
    <v-tabs centered>
      <v-tab >Login</v-tab>
      <v-tab > Register</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-container>
            <div v-if="n==1">
                <v-card width="400" class="mx-auto mt-5" >
                <v-card-text>
                    <v-form>
                    <v-text-field 
                        label="Username" 
                        prepend-icon="mdi-account-circle"
                    />
                    <v-text-field 
                        :type="showPassword ? 'text' : 'password'" 
                        label="Password"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                    />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary">Login</v-btn>
                </v-card-actions>
                </v-card>
            </div>
            <div v-else>
                <v-card width="400" class="mx-auto mt-5">
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
                </v-card-actions>
                </v-card>
            </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
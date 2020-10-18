<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >

    <v-card-title>
      The best employee management application
    </v-card-title>

    <v-card-subtitle>
      more subtitle coming soon.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         more info comming soon.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
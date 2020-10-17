<template>
<nav>
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1><span class="font-weight-light">WORK</span><span class="font-weight-regular grey--text text--darken-4">SCHEDULE</span></h1>     
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary"
        >
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      drawer: false,
      group: null,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home'},
          { title: 'About', path: '/about', icon:'mdi-adjust'},
          { title: 'Schedule', path: '/schedule', icon: 'mdi-calendar'},
          { title: 'Sign In', path: '/signin', icon: 'mdi-account'},
          { title: 'Sign up', path: '/signup', icon: 'mdi-face'},
     ]
    }
  }
}
</script>

<style>
</style>
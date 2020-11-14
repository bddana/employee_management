<template>


  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-card-title>
      The best employee management application <br>
       Diversitechnologies team is a 2020 Computer Information Systems graduate.
       Diversitechnologies built this employee managment application 
       as a final graduation project to our client 3 Amigos Boat Rental.

    </v-card-title>

    <v-card-subtitle>
     
       Contributers: 

    </v-card-subtitle>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Position
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.Position }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-card>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Elijah Wilbanks ',
            Position: 'Assistant Project Manager ',
          },
          {
            name: 'Lily Dawit ',
            Position: 'Developer/Tester ',
          },
          {
            name: 'Samuelson Jones ',
            Position: 'Database Manager',
          },
          {
            name: 'Kristal Marie Jovellanos ',
            Position: 'Database Designer ',
          },
          {
            name: 'William Moran  ',
            Position: 'Project Manager  ',
          },
          {
            name: 'Tan Vo ',
            Position: 'Developer',
          },
          {
            name: 'Chonghe Ping ',
            Position: 'Developer/operation ',
          },
          
        ],
      }
    },
  }
</script>
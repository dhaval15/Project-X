<template>
    <v-dialog persistent v-model="alert.dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">
          <v-spacer/>
          <h2 class="title">{{alert.title}}</h2>
          <v-spacer/>
        </v-card-title>
        <v-card-text>
          <v-progress-circular indeterminate color="deep-orange lighten-2"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" v-if="alert.p" flat @click.native="dialog = false">{{alert.positive}}</v-btn>
          <v-btn color="green darken-1" v-if="alert.n" flat @click.native="dialog = false">{{alert.negative}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "alert",
        data:() => ({

        }),
        props:['alert']
    }
</script>

<style scoped>
  .title{
    font-style: normal;
  }
</style>

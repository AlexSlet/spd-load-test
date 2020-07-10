<template>
  <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <v-card class="pa-4">

        <v-card-text class="text-center">
         <h1>Are you sure?</h1>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="secondary"
            text
            @click="$emit('close')"
          >
            No
          </v-btn>
          <v-btn
            color="primary"
            @click="$emit('accept')"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['dialog']

}
</script>

<style>

</style>
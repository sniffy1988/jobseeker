<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-card>
          <v-card-title primary-title>
            Applied Jobs
          </v-card-title>
          <v-card-text>
            {{ store.count }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title primary-title>
            Screening Jobs
          </v-card-title>
          <v-card-text>
            {{ store.screenCount }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title primary-title>
            Tech Jobs
          </v-card-title>
          <v-card-text>
            {{ store.techCount }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Graph applications creations</v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const store = useJobStore();
</script>

<style scoped>

</style>
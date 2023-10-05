<template>
  <v-container>
    <div class="max-w-md mx-auto">
      <h2 class="text-xl uppercase font-bold mb-4">
        {{ job.name }}
      </h2>
      <p class="mb-4">
        Expected Salary : {{ job.salary }}
      </p>
      <p class="mb-4">
        Applied on {{ job.dateApplication }}
      </p>
      <p class="mb-4">
        Status: {{ job.status }}
      </p>
      <v-textarea
        v-model="job.note"
        clearable
        label="Notes"
      />
      <div class="flex justify-between">
        <v-btn color="success">
          Update
        </v-btn>
        <v-btn color="error">
          Delete
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
const store = useJobStore();
const job = store.currentJob(route.params.id)
</script>

<style scoped>

</style>
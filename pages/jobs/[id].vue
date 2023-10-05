<template>
  <v-container>
    this is inner job page, {{ job }}
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
const store = useJobStore();
const job = store.currentJob(route.params.id)
</script>

<style scoped>

</style>
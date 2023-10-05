<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Salary
          </th>
          <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Application Date
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in jobs"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.dateApplication }}</td>
          <td>
            <v-btn
              color="success"
              @click="navigateTo('/jobs/' + item.id)"
            >
              View
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
const store = useJobStore();
const jobs = store.jobs;
</script>

<style scoped>

</style>
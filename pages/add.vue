<template>
  <v-container grid-list-lg>
    <v-form
      class="max-w-lg mx-auto"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        id="name"
        v-model="name"
        name="name"
        label="Name of application"
      />
      <v-text-field
        id="url"
        v-model="url"
        name="url"
        label="Url of application"
      />
      <v-text-field
        id="salary"
        v-model="salary"
        name="salary"
        label="Salary"
        type="number"
      />
      <v-select
        v-model="status"
        :items="statusItems"
        label="Status"
      />
      <v-textarea
        v-model="note"
        clearable
        label="Notes"
      />
      <div class="flex">
        <v-btn
          color="green"
          class="mx-auto"
          type="submit"
        >
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const name = ref('')
const url = ref('');
const salary = ref('');
const status = ref('');
const note = ref('');

const statusItems = ['applied', 'screening', 'tech', 'rejected', 'offer'];

const isFormValid = computed(() => {
    return false;
})
const onSubmit = () => {
    if (isFormValid.value) {
        console.log('save application entry')
    }
}
</script>

<style scoped>

</style>
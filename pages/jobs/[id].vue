<template>
  <v-container>
    <div class="max-w-md mx-auto">
      <h2 class="text-xl uppercase font-bold mb-4">
        {{ job.name }}
      </h2>
      <p class="mb-4">
        Role : {{ job.role }}
      </p>
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
        v-model="newNote"
        clearable
        label="Notes"
      />
      <div class="flex justify-between">
        <v-btn
          color="success"
          @click="onUpdateClick"
        >
          Update
        </v-btn>
        <v-btn
          color="error"
          @click="onDeleteClick"
        >
          Delete
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import {ref, unref} from 'vue';
import { useToast } from 'tailvue'

const $toast = useToast()

const route = useRoute();
const router = useRouter();
const store = useJobStore();
const job = store.currentJob(route.params.id);

const newNote = ref('');
const onDeleteClick = () => {
    store.deleteJob(route.params.id);
    router.push('/jobs');
    $toast.warning('Deleted job!');
}

const onUpdateClick = () => {
    store.updateJob({
        ...job,
        note: unref(newNote)
    });
    $toast.success('Updated job!');

}

onMounted(() => {
    newNote.value = job.note;
})
</script>

<style scoped>

</style>
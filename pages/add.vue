<template>
  <v-container grid-list-lg>
    <v-form
      ref="formRef"
      class="max-w-lg mx-auto"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        id="name"
        v-model="name"
        name="name"
        label="Name of application"
        :rules="[rules.required]"
      />
      <v-text-field
        id="url"
        v-model="url"
        name="url"
        label="Url of application"
        :rules="[rules.required]"
      />
      <v-text-field
        id="salary"
        v-model="salary"
        name="salary"
        label="Salary"
        type="number"
        :rules="[rules.required]"
      />
      <v-select
        v-model="status"
        :items="statusItems"
        label="Status"
        :rules="[rules.required]"
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
import { ref, unref } from 'vue';

const name = ref('')
const url = ref('');
const salary = ref(0);
const status = ref('');
const note = ref('');

const store = useJobStore();
const router = useRouter();

const rules = {
  required: (value: any) => !!value || 'Field is required',
}

const statusItems = ['applied', 'screening', 'tech', 'rejected', 'offer'];

const formRef = ref(null);

const onSubmit = async (event: any) => {
  const results = await event
  if (results.valid) {
    store.add({
      name: unref(name),
      url: unref(url),
      salary: unref(salary),
      status: unref(status),
      note: unref(status),
      lastChanged: new Date(),
      dateApplication: new Date()
    });

    router.push('/');
  }

}
</script>

<style scoped>

</style>
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
        id="role"
        v-model="role"
        name="role"
        label="Role"
        :rules="[rules.required]"
      />
      <v-text-field
        id="url"
        v-model="url"
        name="url"
        label="Url of application"
        :rules="[rules.required]"
        prefix="https://"
      />
      <v-text-field
        id="salary"
        v-model="salary"
        name="salary"
        label="Salary"
        type="number"
        prefix="$"
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
import { ref, unref, Ref } from 'vue';
import { uuid } from 'vue-uuid';
import * as Toast from "vue-toastification/dist/index.mjs";
const { useToast } = Toast
const toast = useToast();


const name = ref('')
const url = ref('');
const salary = ref(0);
const role = ref('');
const status: Ref<'applied'| 'screening'| 'tech'| 'rejected'| 'offer'> = ref('applied');
const note = ref('');

const store = useJobStore();
const router = useRouter();

const rules = {
  required: (value: any) => !!value || 'Field is required',
}

const statusItems = ['applied', 'screening', 'tech', 'rejected', 'offer'];

const formRef = ref(null);

const onSubmit = async (event: any) => {
  const {valid} = await event;
  if (valid) {
    store.add({
      id: uuid.v1(),
      name: unref(name),
      url: unref(url),
      salary: unref(salary),
      role: unref(role),
      status: unref(status),
      note: unref(note),
      lastChanged: new Date(),
      dateApplication: new Date()
    });

    router.push('/');
    toast.success("Created job", {
      timeout: 2000
    });
  }

}
</script>

<style scoped>

</style>
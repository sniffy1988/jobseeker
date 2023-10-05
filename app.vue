<template>
  <VitePwaManifest />
  <NuxtLayout>
    <v-app>
      <VToolbar color="green">
        <VContainer class="flex items-center">
          <h2
            class="font-bold cursor-pointer"
            @click="navigateTo('/')"
          >
            JOBSEEKER
          </h2>
          <VBtn
            class="ml-auto mr-2"
            @click="navigateTo('/add')"
          >
            Add
          </VBtn>
          <VBtn
            class="mr-2"
            @click="navigateTo('/jobs')"
          >
            List
          </VBtn>
        </VContainer>
      </VToolbar>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

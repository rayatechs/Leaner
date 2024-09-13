<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheHeader from './components/TheHeader.vue';
import IconProject from './components/icons/IconProject.vue';
</script>

<template>
  <div class="relative flex flex-row max-h-screen overflow-hidden bg-gray-100">
    <TheNavbar />

    <div class="flex flex-col w-full pr-8">
      <TheHeader />

      <main class="w-full h-full bg-white rounded-t-2xl">
        <div class="flex flex-row items-center justify-start w-full px-6 py-4 border-b">
          <IconProject class="w-6 mr-2" />
          <h4>Projects</h4>
        </div>

        <div class="w-full h-full p-6 overflow-y-scroll">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
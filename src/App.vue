<script setup lang="ts">
import { computed, shallowRef, type ShallowRef } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheHeader from './components/TheHeader.vue';
import IconHome from './components/icons/IconHome.vue';
import IconCalender from './components/icons/IconCalender.vue';
import IconChat from './components/icons/IconChat.vue';
import IconDoc from './components/icons/IconDoc.vue';
import IconBoard from './components/icons/IconBoard.vue';
import IconNotFound from './components/icons/IconNotFound.vue';

const route = useRoute()

const icons: ShallowRef<any> = shallowRef({
  'Home': IconHome,
  'Board': IconBoard,
  'Timeline': IconCalender,
  'Chat': IconChat,
  'Doc': IconDoc,
  '404 Page': IconNotFound
})

const name = computed(() => {
  if (!route.name) {
    return '404 Page'
  }

  return route.name.toString().charAt(0).toUpperCase() + route.name.toString().slice(1)
})
</script>

<template>
  <div class="relative flex flex-col max-h-screen overflow-hidden bg-gray-100">
    <TheHeader />

    <div class="flex flex-row w-full h-screen pr-6">
      <TheNavbar />

      <main class="w-full bg-white rounded-t-2xl">
        <div class="flex flex-row items-center justify-start w-full px-6 py-2 border-b">
          <component :is="icons[name]" class="w-6 mr-2"></component>
          <h4 class="text-sm font-bold">{{ name }}</h4>
        </div>

        <div class="w-full p-6 overflow-y-scroll h-[85%]">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
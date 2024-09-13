<script setup lang="ts">
import IconLock from '@/components/icons/IconLock.vue';
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="grid w-full grid-cols-6 gap-10 auto-rows-max">
        <RouterLink v-for="i in 6" :key="i" to="/"
            class="flex flex-col justify-between w-full p-6 bg-gray-200 rounded-lg aspect-square">
            <div class="flex flex-col items-start justify-center">
                <h3 class="mb-4 text-xl font-bold">Project Title</h3>
                <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-row -space-x-2">
                    <div v-for="i in 3" :key="i"
                        class="flex items-center justify-center w-8 h-8 text-center text-white bg-gray-800 rounded-full aspect-square">
                        {{ i }}
                    </div>
                </div>

                <IconLock class="w-6" />
            </div>
        </RouterLink>
    </div>
</template>
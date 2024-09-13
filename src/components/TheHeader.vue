<script setup lang="ts">
import IconBell from '@/components/icons/IconBell.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconUser from '@/components/icons/IconUser.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<template>
    <header class="flex flex-row items-start justify-between p-6 pr-0">
        <div class="flex flex-row items-end justify-center space-x-2">
            <h2 class="text-2xl font-bold text-gray-800 ">Workspace</h2>
            <h4 class="text-lg font-bold text-gray-500 ">Project</h4>
        </div>

        <div class="flex flex-row items-center space-x-2">
            <div class="relative">
                <input type="text" placeholder="Find Goods"
                    class="py-2 pl-10 pr-4 text-sm font-medium bg-gray-200 rounded-lg focus:outline-none">
                <IconSearch class="absolute w-6 top-1.5 left-2" />
            </div>

            <button class="p-2 bg-gray-200 rounded-lg">
                <IconBell class="w-5" />
            </button>

            <button class="p-2 bg-gray-200 rounded-lg">
                <IconUser class="w-5" />
            </button>

            <button class="p-2 bg-gray-200 rounded-lg">
                <IconMoon class="w-5" />
            </button>
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TheLogo from './TheLogo.vue';
import IconBell from '@/components/icons/IconBell.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconUser from '@/components/icons/IconUser.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconArrowRight from './icons/IconArrowRight.vue';

const workspaceHovered = ref(false)
const workspaceClicked = ref(false)
</script>

<template>
    <header class="flex flex-row items-center p-6">
        <div class="ml-2 mr-14">
            <TheLogo />
        </div>

        <div class="flex flex-row items-end justify-center space-x-2">
            <div class="relative flex flex-row items-center justify-center cursor-pointer"
                @mouseenter="workspaceHovered = true" @mouseleave="workspaceHovered = false"
                @click="workspaceClicked = !workspaceClicked">
                <h2 class="text-2xl font-bold text-gray-800">Workspace</h2>
                <Transition name="slide-to-right-fade">
                    <IconArrowRight v-if="workspaceHovered || workspaceClicked" class="w-8 transition-all duration-300"
                        :class="{ 'rotate-90': workspaceClicked }" />
                </Transition>

                <Transition name="slide-to-down-fade">
                    <div v-if="workspaceClicked"
                        class="absolute left-0 flex flex-col items-center justify-center bg-white border rounded-lg w-60 top-10">
                        <button class="w-full px-4 py-2 text-left hover:bg-gray-200">Raya</button>
                        <button class="w-full px-4 py-2 text-left hover:bg-gray-200">Part</button>
                        <button class="w-full px-4 py-2 text-left border-t hover:bg-gray-200">Create New
                            Workspace</button>
                    </div>
                </Transition>
            </div>
            <h4 class="text-lg font-bold text-gray-500 ">Project</h4>
        </div>

        <div class="flex flex-row items-center ml-auto space-x-2">
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

<style scoped>
.slide-to-right-fade-enter-active,
.slide-to-down-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-to-right-fade-leave-active,
.slide-to-down-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-to-right-fade-enter-from,
.slide-to-right-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.slide-to-down-fade-enter-from,
.slide-to-down-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
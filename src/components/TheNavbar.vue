<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCalender from '@/components/icons/IconCalender.vue';
import IconChat from '@/components/icons/IconChat.vue';
import IconBoard from '@/components/icons/IconBoard.vue';
import IconDoc from '@/components/icons/IconDoc.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import IconHelp from '@/components/icons/IconHelp.vue';
import IconHome from '@/components/icons/IconHome.vue';
</script>

<template>
    <div class="flex flex-row">
        <aside class="flex flex-col items-center my-4 border-r border-gray-300">
            <nav class="flex flex-col items-center justify-center px-4 mb-auto">
                <RouterLink to="/"
                    class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 bg-white rounded-2xl group hover:opacity-100">
                    <IconHome class="w-6 opacity-50 group-hover:opacity-100" />
                    <span class="pt-2 text-sm font-bold text-black ">Home</span>
                </RouterLink>

                <RouterLink to="/board"
                    class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                    <IconBoard class="w-6 opacity-50 group-hover:opacity-100" />
                    <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Board</span>
                </RouterLink>

                <RouterLink to="/"
                    class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                    <IconCalender class="w-6 opacity-50 group-hover:opacity-100" />
                    <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Timeline</span>
                </RouterLink>

                <RouterLink to="/"
                    class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                    <IconChat class="w-6 opacity-50 group-hover:opacity-100" />
                    <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Chat</span>
                </RouterLink>

                <RouterLink to="/"
                    class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                    <IconDoc class="w-6 opacity-50 group-hover:opacity-100" />
                    <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Docs</span>
                </RouterLink>
            </nav>

            <div class="flex flex-row items-center justify-around w-full px-1">
                <button class="flex justify-center w-full px-2 py-4 group ">
                    <IconSettings class="opacity-80 w-7 group-hover:opacity-100" />
                </button>

                <button class="flex justify-center w-full px-2 py-4 group ">
                    <IconHelp class="opacity-80 w-7 group-hover:opacity-100" />
                </button>
            </div>
        </aside>

        <aside class="p-4 space-y-6 rounded-xl w-60">
            <div class="flex flex-col items-center justify-center">
                <h6 class="mb-2 text-xs text-gray-400">Status</h6>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">All</button>
                <button class="w-full px-4 py-2 mb-2 text-left bg-white rounded-lg">Not Started</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Active</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Close</button>
            </div>

            <div class="flex flex-col items-center justify-center">
                <h6 class="mb-2 text-xs text-gray-400">Meetings</h6>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">All</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Recorded</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">On Going</button>
            </div>

            <div class="flex flex-col items-center justify-center">
                <h6 class="mb-2 text-xs text-gray-400">Iterations</h6>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Sprint</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Milestone</button>
            </div>

            <div class="flex flex-col items-center justify-center">
                <h6 class="mb-2 text-xs text-gray-400">Release</h6>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Plan</button>
                <button class="w-full px-4 py-2 mb-2 text-left rounded-lg hover:bg-white">Deadlines</button>
            </div>
        </aside>
    </div>
</template>

<style scoped>
.slide-to-right-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-to-right-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-to-right-fade-enter-from,
.slide-to-right-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>
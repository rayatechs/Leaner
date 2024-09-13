<script setup lang="ts">
import IconCalender from '@/components/icons/IconCalender.vue';
import IconChat from '@/components/icons/IconChat.vue';
import IconBoard from '@/components/icons/IconBoard.vue';
import IconDoc from '@/components/icons/IconDoc.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import IconHelp from '@/components/icons/IconHelp.vue';
import IconHome from '@/components/icons/IconHome.vue';

</script>

<template>
    <aside class="flex flex-col items-center h-screen pt-4">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="pb-16 w-14" viewBox="0 0 24 24">
                <path class="fill-gray-600" fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 2C7.86697 2 5.80046 2 5.19825 3.29918C5.14649 3.41086 5.10282 3.52686 5.06765 3.6461C4.65857 5.0333 6.11981 6.64111 9.0423 9.85674L11 12H13L14.9577 9.85674C17.8802 6.64111 19.3414 5.0333 18.9323 3.6461C18.8972 3.52686 18.8535 3.41086 18.8017 3.29918C18.1995 2 16.133 2 12 2Z" />
                <path class="opacity-50 fill-gray-600"
                    d="M5.19825 20.7008C5.80046 22 7.86697 22 12 22C16.133 22 18.1995 22 18.8017 20.7008C18.8535 20.5891 18.8972 20.4731 18.9323 20.3539C19.3414 18.9667 17.8802 17.3589 14.9577 14.1433L13 12H11L9.0423 14.1433C6.11981 17.3589 4.65857 18.9667 5.06765 20.3539C5.10282 20.4731 5.14649 20.5891 5.19825 20.7008Z" />
            </svg>
        </div>

        <nav class="flex flex-col items-center justify-center px-4">
            <button
                class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                <IconHome class="w-6 opacity-50 group-hover:opacity-100" />
                <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Home</span>
            </button>

            <button
                class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                <IconBoard class="w-6 opacity-50 group-hover:opacity-100" />
                <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Board</span>
            </button>

            <button
                class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                <IconCalender class="w-6 opacity-50 group-hover:opacity-100" />
                <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Timeline</span>
            </button>

            <button
                class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                <IconChat class="w-6 opacity-50 group-hover:opacity-100" />
                <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Chat</span>
            </button>

            <button
                class="flex flex-col items-center justify-center w-full px-4 py-2 mt-1 rounded-2xl group hover:opacity-100 hover:bg-white">
                <IconDoc class="w-6 opacity-50 group-hover:opacity-100" />
                <span class="pt-2 text-sm font-bold text-gray-500 group-hover:text-black">Docs</span>
            </button>
        </nav>

        <div class="flex flex-row items-center justify-around w-full px-1 mt-auto">
            <button class="flex justify-center w-full px-2 py-4 group ">
                <IconSettings class="opacity-80 w-7 group-hover:opacity-100" />
            </button>

            <button class="flex justify-center w-full px-2 py-4 group ">
                <IconHelp class="opacity-80 w-7 group-hover:opacity-100" />
            </button>
        </div>
    </aside>
</template>
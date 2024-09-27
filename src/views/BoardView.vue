<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import IconLink from '@/components/icons/IconLink.vue';
import ThePanel from '@/components/ThePanel.vue';
import { ref, Teleport } from 'vue';

const task = ref(null)
const role = ref(null)
const request = ref(null)

const panelOpen = ref(false)
</script>

<template>
    <section class="">
        <div class="flex flex-row p-1 mb-4 space-x-1 bg-gray-200 rounded-full item-center max-w-fit">
            <button class="px-2 py-1 text-sm font-medium bg-gray-300 rounded-full">Kanban</button>
            <button class="px-2 py-1 text-sm font-medium rounded-full hover:bg-gray-300">List view</button>
            <button class="px-2 py-1 text-sm font-medium rounded-full hover:bg-gray-300">Table view</button>
        </div>

        <div class="flex flex-row items-start space-x-4">
            <div class="flex flex-col items-center justify-center w-1/5 space-y-4">
                <div class="flex flex-row items-center w-full py-1 pl-3 pr-1 text-sm bg-gray-200 rounded-full">
                    <h4 class="mr-2 font-semibold">Assessment</h4>
                    <span>4</span>
                    <button @click="panelOpen = !panelOpen" class="ml-auto">
                        <IconAdd class="w-8" />
                    </button>
                </div>

                <div class="flex flex-col justify-center w-full p-2 pt-1 bg-gray-200 rounded-3xl">
                    <div class="flex flex-row items-center">
                        <h5 class="my-2 ml-2 font-bold">Toy Epic</h5>
                        <button class="ml-auto">
                            <IconAdd class="w-8" />
                        </button>
                    </div>

                    <div class="flex flex-col justify-center w-full bg-gray-300 rounded-2xl">
                        <div class="p-4">
                            <span class="px-2 py-1 text-xs text-blue-700 bg-blue-200 rounded-full max-w-fit">Tag</span>
                            <h5 class="my-2 font-bold">Toy Story</h5>
                            <p class="text-sm font-medium">As User</p>
                            <p class="text-sm font-medium">I Want something like that</p>
                            <p class="text-sm font-medium">So that can do somthing</p>
                        </div>

                        <div class="flex flex-row items-center w-full px-4 py-2 border-t border-gray-400">
                            <div class="flex flex-row items-center justify-center -space-x-2">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-700 rounded-full aspect-square">
                                    A
                                </div>
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-600 rounded-full aspect-square">
                                    B
                                </div>
                            </div>

                            <div class="ml-auto">
                                <div class="flex flex-row items-center space-x-1">
                                    <IconLink class="w-6" />
                                    <span class="text-sm">4</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center w-full mt-4 bg-gray-300 rounded-2xl">
                        <div class="p-4">
                            <span class="px-2 py-1 text-xs text-blue-700 bg-blue-200 rounded-full max-w-fit">Tag</span>
                            <h5 class="my-2 font-bold">Toy Story</h5>
                            <p class="text-sm font-medium">As User</p>
                            <p class="text-sm font-medium">I Want something like that</p>
                            <p class="text-sm font-medium">So that can do somthing</p>
                        </div>

                        <div class="flex flex-row items-center w-full px-4 py-2 border-t border-gray-400">
                            <div class="flex flex-row items-center justify-center -space-x-2">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-700 rounded-full aspect-square">
                                    A
                                </div>
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-600 rounded-full aspect-square">
                                    B
                                </div>
                            </div>

                            <div class="ml-auto">
                                <div class="flex flex-row items-center space-x-1">
                                    <IconLink class="w-6" />
                                    <span class="text-sm">4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center w-full bg-gray-200 rounded-2xl">
                    <div class="p-4">
                        <span class="px-2 py-1 text-xs text-blue-700 bg-blue-200 rounded-full max-w-fit">Tag</span>
                        <h5 class="my-2 font-bold">Toy Story</h5>
                        <p class="text-sm font-medium">As User</p>
                        <p class="text-sm font-medium">I Want something like that</p>
                        <p class="text-sm font-medium">So that can do somthing</p>
                    </div>

                    <div class="flex flex-row items-center w-full px-4 py-2 border-t border-gray-400">
                        <div class="flex flex-row items-center justify-center -space-x-2">
                            <div
                                class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-700 rounded-full aspect-square">
                                A
                            </div>
                            <div
                                class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-600 rounded-full aspect-square">
                                B
                            </div>
                        </div>

                        <div class="ml-auto">
                            <div class="flex flex-row items-center space-x-1">
                                <IconLink class="w-6" />
                                <span class="text-sm">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <IconArrowRight class="w-10" />

            <div class="flex flex-col items-center justify-center w-1/5 space-y-4">
                <div class="flex flex-row items-center w-full py-1 pl-3 pr-1 text-sm bg-gray-200 rounded-full">
                    <h4 class="mr-2 font-semibold">Refine</h4>
                    <span>7</span>
                    <button class="ml-auto">
                        <IconAdd class="w-8" />
                    </button>
                </div>

                <div class="flex flex-col justify-center w-full bg-gray-200 rounded-2xl">
                    <div class="p-4">
                        <input type="text" class="w-full font-bold bg-transparent outline-none"
                            placeholder="Story Title..." v-model="task">

                        <div v-if="task" class="flex flex-col">
                            <span>As <input type="text" class="bg-transparent outline-none" v-model="role"></span>
                            <span v-if="role">I want to <input type="text" class="bg-transparent outline-none"
                                    v-model="request"></span>
                            <span>So that <input type="text" class="bg-transparent outline-none"></span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center w-full p-2 pt-1 bg-gray-200 rounded-3xl">
                    <div class="flex flex-row items-center">
                        <h5 class="my-2 ml-2 font-bold">Toy Epic</h5>
                        <button class="ml-auto">
                            <IconAdd class="w-8" />
                        </button>
                    </div>

                    <div class="flex flex-col justify-center w-full bg-gray-300 rounded-2xl">
                        <div class="p-4">
                            <span class="px-2 py-1 text-xs text-blue-700 bg-blue-200 rounded-full max-w-fit">Tag</span>
                            <h5 class="my-2 font-bold">Toy Story</h5>
                            <p class="text-sm font-medium">As User</p>
                            <p class="text-sm font-medium">I Want something like that</p>
                            <p class="text-sm font-medium">So that can do somthing</p>
                        </div>

                        <div class="flex flex-row items-center w-full px-4 py-2 border-t border-gray-400">
                            <div class="flex flex-row items-center justify-center -space-x-2">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-700 rounded-full aspect-square">
                                    A
                                </div>
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm text-center text-white bg-gray-600 rounded-full aspect-square">
                                    B
                                </div>
                            </div>

                            <div class="ml-auto">
                                <div class="flex flex-row items-center space-x-1">
                                    <IconLink class="w-6" />
                                    <span class="text-sm">4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <IconArrowRight class="w-10" />

            <div class="flex flex-col items-center justify-center w-1/5 space-y-4">
                <div class="flex flex-row items-center w-full py-1 pl-3 pr-1 text-sm bg-gray-200 rounded-full">
                    <h4 class="mr-2 font-semibold">To Do</h4>
                    <span>2</span>
                    <button class="ml-auto">
                        <IconAdd class="w-8" />
                    </button>
                </div>
            </div>

            <IconArrowRight class="w-10" />

            <div class="flex flex-col items-center justify-center w-1/5 space-y-4">
                <div class="flex flex-row items-center w-full py-1 pl-3 pr-1 text-sm bg-gray-200 rounded-full">
                    <input class="w-full bg-transparent outline-none" placeholder="Add new Process" type="text">
                    <button class="ml-auto">
                        <IconAdd class="w-8" />
                    </button>
                </div>
            </div>
        </div>

        <Teleport to="#content">
            <Transition name="slide-fade">
                <ThePanel v-if="panelOpen" />
            </Transition>
        </Teleport>
    </section>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
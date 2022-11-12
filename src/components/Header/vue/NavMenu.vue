<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline/index.js";
import { XMarkIcon } from "@heroicons/vue/24/outline/index.js";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
const closeButtonRef = ref(null)
const isOpen = ref(false);
function setIsOpen(show: boolean) {
    isOpen.value = show;
}
</script>
<template>
    <div
        :class="$attrs.class"
        class="relative flex items-center justify-center h-full text-white border-2 border-opacity-20 px-1 md:px-2 rounded cursor-pointer overflow-hidden"
        @click="setIsOpen(true)"
    >
        <Transition name="hide-down">
            <Bars3Icon
                v-if="!isOpen"
                class="h-full"
            />
        </Transition>
        <Transition name="hide-up">
            <XMarkIcon
                v-if="isOpen"
                class="h-full"
            />
        </Transition>
    </div>
    <TransitionRoot
        :show="isOpen"
        as="template"
    >
        <Dialog
            @close="setIsOpen"
            class="grid absolute z-50 w-full"
            :initialFocus="closeButtonRef"
        >
            <TransitionChild
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 z-0 bg-[#000000]/40" />
            </TransitionChild>

            <div class="fixed inset-0 flex items-center justify-center p-4">
                <TransitionChild
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                    class="w-full"
                >
                    <!-- The actual dialog panel -->
                    <DialogPanel
                        class="w-full h-full rounded bg-black py-8 flex flex-col items-center justify-center gap-4"
                    >
                        <div
                            class="relative flex items-center justify-center h-8 gap-8"
                        >
                            <div
                                :class="$attrs.class"
                                ref="closeButtonRef"
                                class="relative flex items-center justify-center h-full w-full text-white border-2 border-opacity-20 px-1 rounded cursor-pointer overflow-hidden"
                                @click="setIsOpen(!isOpen)"
                            >
                                <Transition name="hide-up-popup">
                                    <XMarkIcon
                                        v-if="isOpen"
                                        class="h-full"
                                    />
                                </Transition>
                            </div>
                            <DialogTitle class="text-xl font-bold"
                                >ESEIChads</DialogTitle
                            >
                        </div>
                        <span class="border-b h-1 w-1/2 border-white"></span>
                        <slot />
                        <!-- ... -->
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<style scoped>
.hide-up-enter-active,
.hide-up-leave-active {
    transition: all 0.5s ease-out;
    position: absolute;
}
.hide-up-enter-from,
.hide-up-leave-to {
    transform: translateY(-150%);
}
.hide-down-enter-active,
.hide-down-leave-active {
    transition: all 0.5s ease-out;
}
.hide-down-enter-from,
.hide-down-leave-to {
    transform: translateY(150%);
}

.hide-up-popup-enter-active,
.hide-up-popup-leave-active {
    transition: all 0.5s ease-out;
}
.hide-up-popup-enter-from,
.hide-up-popup-leave-to {
    transform: scale(0) rotate(200deg);
}
</style>

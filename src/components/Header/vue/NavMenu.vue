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
            <Bars3Icon v-if="!isOpen" class="h-full" />
        </Transition>
        <Transition name="hide-up">
            <XMarkIcon v-if="isOpen" class="h-full" />
        </Transition>
    </div>
    <TransitionRoot :show="isOpen" as="template">
        <Dialog @close="setIsOpen" class="grid absolute z-50">
            <TransitionChild
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 z-0 bg-black/30" />
            </TransitionChild>

            <div
                class="fixed inset-0 flex items-center justify-center p-4 w-full"
            >
                <TransitionChild
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <!-- The actual dialog panel -->
                    <DialogPanel class="w-full rounded bg-white">
                        <DialogTitle>Complete your order</DialogTitle>

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
</style>

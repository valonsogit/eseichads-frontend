<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline/index.js";
interface Page {
    id: number;
    attributes: {
        isParent: boolean;
        title: string;
        slug: string;
        content: string;
        childrenPages: { data?: Page[] };
    };
}
interface Props {
    page: Page;
    currentUrl: string;
}
const props = defineProps<Props>();
const BASE_URL = import.meta.env.BASE_URL;
</script>
<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex items-center border-b gap-1 hover:text-gray-500 hover:border-gray-500"
        >
            <a
                v-if="open"
                :href="`${BASE_URL}${props.page.attributes.slug}`"
                :class="
                    props.currentUrl === `${BASE_URL}${props.page.attributes.slug}/`
                        ? `text-gray-500 pointer-events-none`
                        : `hover:text-gray-500`
                "
                >{{ props.page.attributes.title }}</a
            >
            <span
                v-else
                :class="
                    props.currentUrl === `${BASE_URL}${props.page.attributes.slug}/`
                        ? `text-gray-500 pointer-events-none`
                        : `hover:text-gray-500`
                "
            >
                {{ props.page.attributes.title }}
            </span>
            <ChevronDownIcon
                class="w-4 transition-transform duration-500"
                :class="open && '-rotate-180 transform'"
            />
        </DisclosureButton>
        <transition
            enter-active-class="transition duration-250 ease-out"
            enter-from-class="transform scale-75 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-75 opacity-0"
        >
            <DisclosurePanel
                class="flex justify-center border-l-2 border-white pl-2"
            >
                <div class="w-full flex flex-col">
                    <a
                        v-for="childrenPage in props.page.attributes
                            .childrenPages.data"
                        :key="childrenPage.attributes.slug"
                        :href="`${BASE_URL}${props.page.attributes.slug}/${childrenPage.attributes.slug}`"
                        class="block px-4 py-3 text-sm bg-transparent hover:bg-neutral-700 text-center rounded"
                        :class="{
                            'text-gray-500 pointer-events-none':
                                props.currentUrl ===
                                `${BASE_URL}${props.page.attributes.slug}/${childrenPage.attributes.slug}/`,
                        }"
                    >
                        {{ childrenPage.attributes.title }}
                    </a>
                </div>
            </DisclosurePanel>
        </transition>
    </Disclosure>
</template>

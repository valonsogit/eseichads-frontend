<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
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
// bg-gradient-to-r bg-fixed from-[#313b41] to-[#46b396]
</script>
<template>
    <Menu
        as="div"
        class="relative inline-block mr-1 text-left"
        v-slot="{ open }"
    >
        <MenuButton
            class="inline-flex items-center justify-center w-full border-b-2 hover:text-gray-500 hover:border-gray-500"
        >
            <a
                :href="`${BASE_URL}${props.page.attributes.slug}`"
                class="inline-flex items-center justify-center w-full rounded-md"
                :class="
                    props.currentUrl === `/${props.page.attributes.slug}`
                        ? `text-gray-500 pointer-events-none`
                        : `hover:text-gray-500`
                "
            >
                {{ props.page.attributes.title }}
            </a>
            <ChevronDownIcon
                class="h-8 transition-transform duration-500"
                :class="open && '-rotate-180 transform'"
            />
        </MenuButton>

        <transition
            enter-active-class="transition duration-400 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <MenuItems
                class="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-200 shadow-custom bg-black"
            >
                <MenuItem
                    v-for="childrenPage in props.page.attributes.childrenPages
                        .data"
                    :key="childrenPage.attributes.slug"
                    class="block w-full px-4 py-3 text-sm bg-transparent hover:bg-neutral-700 text-center"
                    :class="{
                        'text-gray-500 pointer-events-none':
                            props.currentUrl ===
                            `/${props.page.attributes.slug}/${childrenPage.attributes.slug}`,
                    }"
                    as="a"
                    :href="`${BASE_URL}${props.page.attributes.slug}/${childrenPage.attributes.slug}`"
                >
                    {{ childrenPage.attributes.title }}
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>

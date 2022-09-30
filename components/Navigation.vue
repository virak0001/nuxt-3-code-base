<template>
  <div class="flex justify-between py-4 shadow shadow-lg rounded-lg md:px-5">
    <div class="flex items-center gap gap-4 ml-2 uppercase">
      <NuxtLink v-for="(menu, index) in menus" :key="index" :to="menu.link">
        {{ menu.name }}
      </NuxtLink>
    </div>
    <div class="flex items-center gap gap-2">
      <svg
        class="h-6 w-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
      <img
        class="h-8 w-8 rounded-full cursor-pointer"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      >
      <CommonTheme />
    </div>
  </div>
</template>
<script setup lang="ts">
import { menus } from '~/contrants/menu'
</script>

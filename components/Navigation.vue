<template>
  <div class="flex justify-between py-4">
    <p>Virak Ran</p>
    <div class="flex items-center gap gap-4 ml-2">
      <NuxtLink
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.link"
        class="rounded-md  cursor-pointer font-poppins text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out  dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out"
        :class="$colorMode.value === 'light' ? 'bg-white' : 'bg-grey'"
      >
        {{ menu.name }}
      </NuxtLink>
      <CommonTheme />
    </div>
  </div>
</template>
<script setup lang="ts">
import { menus } from '~/contrants/menu'
</script>

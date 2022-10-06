<template>
  <div class="flex justify-between py-1">
    <img src="~/assets/logo/personal-vector-logo.png" class="w-30 h-30">
    <div class="flex items-center gap gap-4 ml-2">
      <NuxtLink
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.link"
        class="flex rounded-md cursor-pointer dark:text-white font-poppins text-xtiny gap gap-2.5 text-sm py-2 md:px-4 xl:px-5 font-medium items-center  transition-all duration-300 ease-in-out bg-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out"
      >
        <SvgRiHome3Line v-if="menu.name === 'Home'" class="h-6 w-6" />
        <SvgRiAccountPinCircleLine v-if="menu.name === 'About'" class="h-6 w-6" />
        <SvgRiNewspaperLine v-if="menu.name === 'Resume'" class="h-6 w-6" />
        <SvgRiBlockPost v-if="menu.name === 'Blogs'" class="h-6 w-6" />
        <SvgRiContactsBook2Line v-if="menu.name === 'Contact'" class="h-6 w-6" />
        <SvgRiContactsBook2Line v-if="menu.name === 'Works'" class="h-6 w-6" />
        {{ menu.name }}
      </NuxtLink>
      <CommonTheme />
    </div>
  </div>
</template>
<script setup lang="ts">
import { menus } from '~/contrants/menu'
</script>

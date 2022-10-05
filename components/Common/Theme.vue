<template>
  <div
    class="rounded-full cursor-pointer font-poppins text-gray-lite font-medium p-3 transition-all duration-300 ease-in-out  dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out"
    :class="$colorMode.value === 'light' ? 'bg-white' : 'bg-grey'"
  >
    <SvgRiComputerLine v-show="$colorMode.value === 'system'" class="h-5 w-5" />
    <SvgRiSunLine v-show="$colorMode.value === 'dark'" class="h-5 w-5" @click="mode('light')" />
    <SvgRiMoonLine v-show="$colorMode.value === 'light'" class="h-5 w-5" @click="mode('dark')" />
  </div>
</template>
<script setup lang="ts">
function mode (value: string) {
  const colorMode = useColorMode()
  colorMode.preference = value
}
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>

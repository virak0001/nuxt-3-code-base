<template>
  <div
    class="flex w-9 h-9 rounded-full justify-center items-center cursor-pointer"
    @click="mode($colorMode.value)"
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

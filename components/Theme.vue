<template>
  <CommonButton classes="w-6 h-6" variant="primary" @click="mode" />
</template>
<script setup lang="ts">
function mode () {
  const colorMode = useColorMode()
  if (colorMode.value === 'dark') { colorMode.preference = 'light' } else { colorMode.preference = 'dark' }
}
</script>
  <style>
  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  </style>

<template>
  <div
    class="rounded-full bg-white dark:black text-black dark:text-white cursor-pointer font-poppins text-gray-lite font-medium p-3 transition-all duration-300 ease-in-out  dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out"
  >
    <SvgRiSunLine class="h-5 w-5" @click="toggleDark()" />
    <!-- <SvgRiMoonLine class="h-5 w-5" @click="toggleTheme" /> -->
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

watch(isDark, () => {
  handleMode()
})

onMounted(() => {
  handleMode()
})

function handleMode () {
  const app = document.querySelector('.app-bg')

  if (isDark.value) {
    app.classList.add('bg-home-dark')
    app.classList.remove('bg-home-light')
  } else {
    app.classList.add('bg-home-light')
    app.classList.remove('bg-home-dark')
  }
}
</script>

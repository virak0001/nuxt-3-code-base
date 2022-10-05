export const backgroundImage = computed(() => {
  const colorMode = useColorMode()
  if (colorMode.value === 'dark') { return 'bg-homeBg-dark' }
  if (colorMode.value === 'light') { return 'bg-homeBg' }
})

export const backgroundColor = computed(() => {
  const colorMode = useColorMode()
  if (colorMode.value === 'dark') { return 'bg-[#111111]' }
  if (colorMode.value === 'light') { return 'bg-white' }
})

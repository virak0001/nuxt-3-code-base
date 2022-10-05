<template>
  <div
    class="min-h-screen bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full bg-homeBg"
    :class="backgroundImage"
  >
    <div class="container">
      <Navigation class="justify-self-center" />
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import { backgroundImage } from '~/composables/colorTheme'
</script>
<style scoped>
.container {
  margin: auto;
  width: 100%;
}

@media(min-width: 992px) {
  .container {
    max-width: 992px;
  }
}
@media(min-width: 1280px){
  .container {
    max-width: 1280px;
  }
}

.bg-homeBg{
  background-image: url('~/assets/background/background-home.jpg');
}
.bg-homeBg-dark {
  background-image: url('~/assets/background/background-home-dark.jpg');
}
</style>

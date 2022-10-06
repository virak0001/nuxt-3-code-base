<template>
  <div class="min-h-screen app-bg bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
    <div class="container">
      <Navigation class="justify-self-center" />
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.container {
  margin: auto;
  width: 100%;
}

@media(min-width: 992px) {
  .container {
    max-width: 992px;
  }
}

@media(min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

.bg-home-light {
  background-image: url('~/assets/background/background-home.jpg');
}

.bg-home-dark {
  background-image: url('~/assets/background/background-home-dark.jpg');
}
</style>

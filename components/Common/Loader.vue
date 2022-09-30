<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="max-w-[300px] text-4xl h-[200px] w-full p-4 inline-flex rounded-sm shadow-xl justify-center items-center"
    >
      <p class="mr-2">
        {{ message || 'Loading' }}
      </p>
      <p class="animate-bounce">
        .
      </p>
      <p class="animate-bounce animate-delay-100">
        .
      </p>
      <p class="animate-bounce animate-delay-200">
        .
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

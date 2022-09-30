<template>
  <CommonDialog @close="$emit('cancel')">
    <template #body>
      <p class="text-center">
        {{ text || 'Are you sure?' }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-20 p-2">
        <CommonButton variant="cancel" @click="$emit('cancel')">
          X
        </CommonButton>
        <CommonButton variant="confirm" @click="$emit('confirm')" />
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

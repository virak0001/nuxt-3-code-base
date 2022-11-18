<template>
  <div class="w-full">
    <!-- <InfoContainer>
      <InfoResume />
    </InfoContainer> -->
    <CommonTable
      v-model="search"
      :loading="false"
      :headers="[]"
      :total-items="10"
      :items="[]"
    />
  </div>
</template>
<script setup lang="ts">
import { useCountry } from '~/stores/country'
const { fetch } = useCountry()
const search = ref('')
onMounted(async () => {
  await fetch()
})
</script>

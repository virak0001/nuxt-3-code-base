<!-- <template>
  <div class="inline-flex flex justify-center items-center">
    <div
      class="flex items-center gap-2"
      @click.prevent="showPicker = !showPicker"
    >
      <svgIcon name="calendar" class="w-6 h-6" />
      <input
        :value="displayDate"
        type="text"
        class="outline-none cursor-pointer"
      />
    </div>
    <CommonDialog v-if="showPicker" @close="showPicker = false">
      <template #body>
        <CommonInputDateTimePicker
          :value="selectedDate"
          type="text"
          class="border rounded-sm"
          @change="updateDate"
        />
      </template>
    </CommonDialog>
    <scroll-picker v-model="selectedHours" :options="hours"></scroll-picker>
    <scroll-picker v-model="selectedMinutes" :options="minutes"></scroll-picker>
  </div>
</template>

<script setup lang="ts">
import { useDateFormatter } from '~/composables/utils'
import { minutes, hours } from '~/constants/forms/datetime'
const { format } = useDateFormatter()
const { $dayjs } = useContext()

const props = defineProps<{
  value: string | Date
}>()
const emit = defineEmits(['input'])

const showPicker = ref(false)

const selectedDate = ref(props.value)
const selectedHours = ref(format(props.value, 'HH'))
const selectedMinutes = ref(format(props.value, 'mm'))

const displayDate = ref(format(props.value))

function updateDate(date: string) {
  selectedDate.value = date
  showPicker.value = false
}

watch([selectedDate, selectedMinutes, selectedHours], emitChange, {
  immediate: true,
})

function emitChange() {
  const date = $dayjs(selectedDate.value)
    .set('hour', Number(selectedHours.value))
    .set('minute', Number(selectedMinutes.value))
  emit('input', date.toISOString())
  displayDate.value = format(date, 'date')
}
</script> -->

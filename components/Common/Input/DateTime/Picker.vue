<!-- <template>
  <div class="w-full cursor-default select-none bg-white px-4">
    <div class="mb-2 flex items-center justify-center">
      <button
        type="button"
        class="inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-gray-200"
        @click="prevMonth()"
      >
        <svg-icon name="chevron-left" class="h-8 w-8 text-gray-500" />
      </button>
      <span class="px-2 text-lg font-bold">
        {{ MONTH_NAMES[month] }} {{ year }}
      </span>
      <button
        type="button"
        class="inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-gray-200"
        @click="nextMonth()"
      >
        <svg-icon name="chevron-right" class="h-8 w-8 text-gray-500" />
      </button>
    </div>

    <div class="-mx-1 mb-3 flex flex-wrap">
      <div
        v-for="(day, index) in DAYS"
        :key="`dd${index}`"
        style="width: 14.26%"
        class="px-1"
      >
        <div
          class="text-center text-xs font-medium"
          :class="{
            'text-blue-500': index === 5,
            'text-red-600': index === 6,
            'text-gray-800': index < 5,
          }"
        >
          {{ day }}
        </div>
      </div>
    </div>

    <div class="-mx-1 flex flex-wrap">
      <div
        v-for="(blankday, index) in blankdays"
        :key="`b${index}`"
        style="width: 14.28%"
        class="border border-transparent p-1 text-center text-sm"
      ></div>
      <div
        v-for="(date, dateIndex) in noOfDays"
        :key="`d${dateIndex}`"
        style="width: 14.28%"
        class="mb-1 px-1"
      >
        <div
          class="h-7 w-7 cursor-pointer rounded-full text-center text-sm font-semibold leading-loose transition duration-100 ease-in-out hover:bg-yellow-300"
          :class="{
            'bg-yellow-300': isActive(date),
            'bg-yellow-100': isToday(date) && !isActive(date),
            'text-blue-500': (blankdays.length + dateIndex) % 7 === 5,
            'text-red-600': (blankdays.length + dateIndex) % 7 === 6,
            'pointer-events-none opacity-20': isDisable(date),
          }"
          @click="selectDate(date)"
        >
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MONTH_NAMES_EN, DAYS_EN } from '~/constants/forms/datetime'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits(['change'])

const month = ref(0)
const year = ref(0)
const noOfDays = ref<number[]>([])
const blankdays = ref<number[]>([])

const today = new Date(new Date().setHours(0, 0, 0, 0))

const activeDate = computed(() => {
  const d = new Date(props.value)
  d.setHours(0, 0, 0, 0)
  return d
})

const MONTH_NAMES = computed(() => {
  return MONTH_NAMES_EN
})

const DAYS = computed(() => {
  return DAYS_EN
})

onMounted(() => {
  initDate()
  getNoOfDays()
})

function initDate() {
  const d = props.value ? new Date(props.value) : new Date()
  month.value = d.getMonth()
  year.value = d.getFullYear()
}

function isDisable(date: number) {
  const d = new Date(year.value, month.value, date)
  if (d.getTime() < today.getTime()) return true
  return false
}

function isActive(date: number) {
  const d = new Date(year.value, month.value, date)
  return activeDate.value.getTime() === d.getTime()
}

function isToday(date: number) {
  const d = new Date(year.value, month.value, date)
  return today.getTime() === d.getTime()
}

function selectDate(date: number) {
  emit('change', format(year.value, month.value + 1, date))
}

function getNoOfDays() {
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()

  // find where to start calendar day of week
  const dayOfWeek = new Date(year.value, month.value).getDay()
  const blankdaysArray = []
  for (let i = 1; i < dayOfWeek; i++) {
    blankdaysArray.push(i)
  }

  const daysArray = []
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i)
  }

  blankdays.value = blankdaysArray
  noOfDays.value = daysArray
}

function prevMonth() {
  if (month.value > 0) {
    month.value--
  } else {
    year.value--
    month.value = 11
  }
  getNoOfDays()
}

function nextMonth() {
  if (month.value < 11) {
    month.value++
  } else {
    year.value++
    month.value = 0
  }
  getNoOfDays()
}

function format(year: number, month: number, day: number): string {
  const YYYY = year.toString().padStart(4, '0')
  const MM = month.toString().padStart(2, '0')
  const DD = day.toString().padStart(2, '0')
  return YYYY + '-' + MM + '-' + DD
}
</script> -->

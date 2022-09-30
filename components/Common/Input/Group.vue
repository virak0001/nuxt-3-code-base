<!-- <template>
  <div v-if="type === 'text'">
    <p :class="labelClasses">
      {{ label() }}
    </p>
    <input
      v-model="data"
      type="text"
      :class="inputClasses"
      :placeholder="placeholder()"
    />
    <span :class="errorClasses">
      {{ error }}
    </span>
  </div>

  <div v-else-if="type === 'password'">
    <p :class="labelClasses">
      {{ label() }}
    </p>
    <input
      v-model="data"
      type="password"
      :class="inputClasses"
      :placeholder="placeholder()"
    />
    <span :class="errorClasses">
      {{ error }}
    </span>
  </div>

  <div v-else-if="type === 'datetime'">
    <p :class="labelClasses">
      {{ label() }}
    </p>
    <CommonInputDateTime v-model="data" :class="inputClasses" />
    <span :class="errorClasses">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '~/composables'
import { InputTypes } from '~/constants/forms'

const labelClasses = 'block text-sm text-gray-800 text-left select-none'
const inputClasses = 'block w-full px-4 py-2 mt-2 border rounded-md'
const errorClasses = 'text-sm text-red-600 transition-all duration-500'

const { $errors } = useContext()
const { $t } = useI18n()

interface Props {
  value: any
  type: InputTypes
  field: string
  name: string
  placeholder?: string | false | undefined
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: undefined,
})

const emit = defineEmits(['update:value'])
const data = useVModel(props, 'value', emit, {
  eventName: 'input',
})

const label = () => $t(props.name) as string

function placeholder() {
  if (props.placeholder === false) return ''
  else if (!props.placeholder) return label()
  return $t(props.placeholder) as string
}

const error = computed(() => {
  return $errors.first(props.field)
})

watch(data, () => {
  $errors.clear(props.field)
})
</script> -->

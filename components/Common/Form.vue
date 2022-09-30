<!-- <template>
  <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
    <slot name="header" />
    <CommonInputGroup
      v-for="(item, index) in formOptions"
      :key="index"
      v-bind="item"
      v-model="formData[item.field]"
    />
    <slot name="buttons">
      <button type="submit">
        Submit
      </button>
    </slot>
  </form>
</template>

<script setup lang="ts">
import { FormOptionItem } from '~/constants/forms'
import { useI18n, useValidator } from '~/composables'
const { validateOnInput } = useValidator()
const { $errors } = useContext()
const { $t } = useI18n()

const props = defineProps<{
  formData: Record<string, any>
  formOptions: FormOptionItem[]
}>()
const emit = defineEmits(['submit', 'invalid'])
const options = ref(props.formOptions)
const form = ref(props.formData)

const validationRules = props.formOptions.reduce(
  (acc: Record<string, string>, item) => {
    if (item.validation) { acc[item.field] = item.validation }
    return acc
  },
  {}
)

onUnmounted(() => $errors.flush())

const onSubmit = () => {
  // const key = Object.keys(props.validationRules)?.[0] for nested objects

  validateOnInput({
    input: form.value,
    rules: validationRules
  })

  const dateItems = options.value.filter(item => item.type === 'datetime')
  dateItems.forEach((item) => {
    if (item.maxDate) {
      if (form.value[item.field] > item.maxDate) {
        $errors.add(item.field, $t('messages.maxDuration') as string)
      }
    }
  })

  $errors.any() ? emit('invalid') : emit('submit', form.value)
}
</script> -->

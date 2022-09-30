<template>
  <button
    :type="type"
    :class="getClasses()"
    :disabled="loading || disabled"
    @click.stop="onClick"
  >
    <svgIcon v-if="loading" name="spinner" class="h-full w-full animate-spin" />
    <svgIcon
      v-else-if="icons[variant]"
      :name="icons[variant]"
      class="h-full w-full"
    />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'cancel' | 'confirm'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  loading: false,
  type: undefined
})

const emit = defineEmits(['click'])

const onClick = () => {
  if (props.loading || props.disabled) { return }
  emit('click')
}

const baseClasses =
  'transition font-medium w-full text-white h-[50px] px-4 py-2 rounded-md border'

const classes = {
  primary: 'bg-orange-400 hover:bg-orange-300',
  cancel: 'bg-red-400 hover:bg-red-300 text-xl font-mono',
  confirm: 'bg-green-500 hover:bg-green-400'
}

function getClasses (): string {
  let appliedClasses = [baseClasses, classes[props.variant]].join(' ')
  if (props.loading || props.disabled) {
    appliedClasses += ' opacity-50 cursor-not-allowed'
  }
  return appliedClasses
}

const icons = {
  primary: '',
  cancel: '',
  confirm: 'check'
}
</script>

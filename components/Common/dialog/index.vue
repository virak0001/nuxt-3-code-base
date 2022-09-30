<template>
  <div tabindex="-1" :class="getElementCssClass('overlay')">
    <Transition v-bind="overlayTransitionProps">
      <div ref="target" :class="getElementCssClass('wrapper')">
        <Transition v-bind="wrapperTransitionProps">
          <div ref="dialog" :class="getElementCssClass('modal')">
            <span :class="getElementCssClass('close')" @click="emit('close')">
              X
            </span>
            <div ref="header" :class="getElementCssClass('body')">
              <slot name="header" />
            </div>
            <div ref="body" :class="getElementCssClass('body')">
              <slot name="body" />
            </div>
            <div ref="footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const settings = {
  fixedClasses: {
    overlay:
      'z-50 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full flex fixed bg-opacity-50 dialog-overlay',
    wrapper: 'p-2 relative mx-auto z-50 w-96 self-center',
    modal: 'overflow-visible relative rounded bg-white shadow',
    body: 'p-5',
    header: 'border-b px-5 rounded-t',
    footer: 'px-5 rounded-b',
    close:
      'flex cursor-pointer items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
  },
  variants: {},
  classes: {
    overlay: 'bg-black',
    wrapper: 'w-full max-w-lg',
    modal: 'bg-white shadow',
    body: 'p-3',
    header: 'border-gray-100',
    footer: 'bg-gray-100',
    close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    closeIcon: 'fill-current h-4 w-4',
    overlayEnterClass: 'opacity-0',
    overlayEnterActiveClass: 'transition ease-out duration-100',
    overlayEnterToClass: 'opacity-100',
    overlayLeaveClass: 'opacity-100',
    overlayLeaveActiveClass: 'transition ease-in duration-100',
    overlayLeaveToClass: 'opacity-0',
    enterClass: '',
    enterActiveClass: '',
    enterToClass: '',
    leaveClass: '',
    leaveActiveClass: '',
    leaveToClass: ''
  }
}

const props = defineProps<{
  variant?: string
}>()
const emit = defineEmits(['close'])
const target = ref()
onClickOutside(target, () => emit('close'))

function getElementCssClass (type: string) {
  const classes = [
    settings.fixedClasses[type],
    settings.variants[props.variant as string]
      ? settings.variants[props.variant as string][type] ||
        settings.classes[type]
      : settings.classes[type]
  ]

  return classes.join(' ')
}
const overlayTransitionProps = ref({
  enterClass: getElementCssClass('overlayEnterClass'),
  enterActiveClass: getElementCssClass('overlayEnterActiveClass'),
  enterToClass: getElementCssClass('overlayEnterToClass'),
  leaveClass: getElementCssClass('overlayLeaveClass'),
  leaveActiveClass: getElementCssClass('overlayLeaveActiveClass'),
  leaveToClass: getElementCssClass('overlayLeaveToClass')
})
const wrapperTransitionProps = ref({
  enterClass: getElementCssClass('enterClass'),
  enterActiveClass: getElementCssClass('enterActiveClass'),
  enterToClass: getElementCssClass('enterToClass'),
  leaveClass: getElementCssClass('leaveClass'),
  leaveActiveClass: getElementCssClass('leaveActiveClass'),
  leaveToClass: getElementCssClass('leaveToClass')
})
</script>

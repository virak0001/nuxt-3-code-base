// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Vue from 'vue'
import type { IVueI18n } from 'vue-i18n'

export function useI18n () {
  const { app } = useContext()
  const { i18n } = app
  if (!i18n) {
    throw new Error('@nuxtjs/i18n not initialized')
  }
  const instance = getCurrentInstance()
  const vm = instance?.proxy || new Vue({})
  const locale = computed({
    get: () => i18n.locale,
    set (locale: string) {
      i18n.setLocale(locale)
    }
  })
  const locales = computed(() => i18n.locales)
  return {
    locale,
    locales,
    $t: vm.$t.bind(vm) as IVueI18n['t'],
    $tc: vm.$tc.bind(vm) as IVueI18n['tc'],
    $d: vm.$d.bind(vm) as IVueI18n['d'],
    $te: vm.$te.bind(vm) as IVueI18n['te'],
    $n: vm.$n.bind(vm) as IVueI18n['n']
  }
}

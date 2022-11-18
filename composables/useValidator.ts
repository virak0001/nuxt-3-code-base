import Validator from '@chantouchsek/validatorjs'
import { defu } from 'defu'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import { useContext } from '@nuxtjs/composition-api'
import { useI18n } from './useI18n'

interface ValidatorEntity {
  input?: Record<string, unknown>
  rules: Record<string, unknown>
  messages?: Record<string, unknown>
  attributes?: Record<string, unknown>
}

export function useValidator () {
  const { $errors } = useContext()
  const { locale } = useI18n()

  const validateOnInput = (payload?: ValidatorEntity) => {
    const { input, rules } = payload || {}
    const vMessage = get(payload, 'messages', {})
    const vAttributes = get(payload, 'attributes', {})
    const customMessages = defu({}, vMessage)
    const customAttributes = defu({}, vAttributes)

    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const lang = require(`~/lang/${locale.value}`)
      const { attributes = {}, messages = {} } = lang.default
        ? lang.default
        : lang
      const options = {
        locale: locale.value as string,
        confirmedReverse: true,
        customMessages: defu(customMessages, messages),
        customAttributes: defu(customAttributes, attributes)
      }

      const validator: Validator = new Validator(input, rules, options)
      Validator.register(
        'must_upload',
        function (value: unknown, _requirement: unknown, _attribute: unknown) {
          return isEmpty(value)
        },
        messages
      )
      if (validator.fails()) {
        $errors.fill(validator.errors.all())

        return false
      }
      $errors.flush()
      return true
    } catch (e) {
      console.error(e)
      $errors.flush()
    }
  }

  const checkValidate = (payload: ValidatorEntity) => {
    const rules = get(payload, 'rules', {})
    const input = get(payload, 'input', {})
    return validateOnInput({ input, rules })
  }

  return {
    validateOnInput,
    checkValidate
  }
}

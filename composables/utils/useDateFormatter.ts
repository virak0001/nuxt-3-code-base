import { useContext } from '@nuxtjs/composition-api'
import { Dayjs } from 'dayjs'

export function useDateFormatter () {
  const { $dayjs } = useContext()

  const formats: Record<string, string> = {
    date: 'DD.MM.YYYY',
    time: 'HH:mm',
    default: 'DD.MM.YYYY - HH:mm'
  }

  return {
    format: (date: string | Date | Dayjs | number, format = 'default') =>
      $dayjs(date).format(formats[format] || format)
  }
}

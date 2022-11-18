import { useContext } from '@nuxtjs/composition-api'

export function useAuthId () {
  const { $auth } = useContext()

  return $auth.user?.id
}

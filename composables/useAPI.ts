import { useContext } from '@nuxtjs/composition-api'
import { AxiosRequestConfig } from 'axios'

export function useAPI (endpoint: string) {
  const { $axios, $errors } = useContext()

  // eslint-disable-next-line @typescript-eslint/ban-types
  const validationWrapper = async (cb: Function) => {
    try {
      const response = await cb()
      return response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { data } = error?.response
      if (data?.statusCode === 422) {
        $errors.fill(data.message)
      }
      throw new Error(error)
    }
  }

  const submit = (
    method: 'post' | 'get' | 'patch' | 'delete',
    route: string,
    payload: unknown,
    config?: AxiosRequestConfig
  ) => {
    const url = `${endpoint}${route ? '/' + route : ''}`
    if (method === 'get' || method === 'delete') { return validationWrapper(() => $axios[method](url, config)) } else { return validationWrapper(() => $axios[method](url, payload, config)) }
  }

  return {
    post: (
      payload: Record<string, unknown> = {},
      route = '',
      config?: AxiosRequestConfig
    ) => submit('post', route, payload, config),

    get: (route = '', config?: AxiosRequestConfig) =>
      submit('get', route, config),

    getOne: (id: string, route = '', config?: AxiosRequestConfig) =>
      submit('get', route ? [route, id].join('/') : id, config),

    patch: (
      id: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: Record<string, any> = {},
      route = '',
      config?: AxiosRequestConfig
    ) => submit('patch', route ? [route, id].join('/') : id, payload, config),

    delete: (id: string, route = '', config?: AxiosRequestConfig) =>
      submit('delete', route ? [route, id].join('/') : id, config)
  }
}

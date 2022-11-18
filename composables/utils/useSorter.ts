export function useSorter () {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sortBy: (array: any[], key: string, direction: 'asc' | 'desc' = 'asc') => {
      return array.sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'asc' ? -1 : 1
        }
        if (a[key] > b[key]) {
          return direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }
  }
}

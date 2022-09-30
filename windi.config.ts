import { defineConfig } from 'windicss/helpers'
function range (size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}
export default defineConfig({
  preflight: true,
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-30
    range(10).map(i => `mt-${i}`) // mt-1 to mt-10
  ],
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  }
})

<template>
  <div>
    <slot v-if="!hideFilter" name="head">
      <div class="flex justify-between">
        <div class="relative mb-3 flex-wrap items-stretch">
          <span
            class="absolute left-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent p-2 text-center text-base font-normal leading-snug text-gray-400"
          >
            <svg-icon name="magnify" class="h-6 w-6" />
          </span>
          <input
            type="text"
            placeholder="Search"
            class="outline-none relative w-full rounded border border-gray-500 bg-white p-2 pl-8 text-sm text-gray-600 placeholder-gray-400"
          >
        </div>
        <slot name="right" />
      </div>
    </slot>
    <div class="flex flex-col overflow-hidden rounded-md shadow-lg">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div
            class="relative overflow-auto border-b border-gray-200"
            :class="tableClass"
            :style="[{ height: `${height}` }, { 'min-height': '100px' }]"
          >
            <table class="w-full divide-y divide-gray-200" :class="minWidth && 'min-w-[650px]'">
              <thead class="sticky top-0 bg-gray-50">
                <tr>
                  <th
                    v-if="showIndexColumn"
                    :class="[
                      'text-center',
                      'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500',
                    ]"
                  >
                    &numero;
                  </th>
                  <th
                    v-for="(column, index) in headers"
                    :key="index"
                    :width="column.width || ''"
                    :class="[
                      'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500',
                      column.class,
                      column && column.sortable ? 'cursor-pointer' : '',
                    ]"
                  >
                    <div class="flex items-center" :class="column.class">
                      <template v-if="['header']">
                        <slot name="header" :column="column" :index="index" />
                      </template>
                      <template v-else>
                        {{ column.text }}
                      </template>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th
                    :colspan="
                      showIndexColumn ? headers.length + 1 : headers.length
                    "
                    class="p-0"
                  >
                    <div class="relative w-full rounded border-t bg-gray-200">
                      <div
                        v-show="loading"
                        class="absolute top-0 h-1 w-full animate-pulse bg-primary duration-75"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody data-tbody="results" class="divide-y divide-gray-200 bg-white">
                <template v-for="(row, index) in items">
                  <slot :item="row" :index="index">
                    <tr
                      :key="index"
                      class="hover:bg-gray-100"
                      :class="[
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                        clickable ? 'cursor-pointer' : '',
                      ]"
                      @click="onRowClick(row)"
                    >
                      <td
                        v-if="showIndexColumn"
                        class="break-words px-6 py-4 text-center text-sm text-gray-700"
                      >
                        {{ getRowNumber(index + 1) }}
                      </td>
                      <td
                        v-for="column in headers"
                        :key="column.value"
                        :data-label="column.text"
                        class="break-all px-2 py-2 text-sm text-gray-700 lg:px-6"
                      >
                        <div class="flex" :class="column.class">
                          <slot :name="column.value" :item="row">
                            <span class="flex" :class="column.class">
                              {{ getValueByPath(row, column.value) }}
                            </span>
                          </slot>
                        </div>
                      </td>
                    </tr>
                  </slot>
                </template>
                <tr v-show="items.length === 0 && loading">
                  <td
                    :colspan="
                      showIndexColumn ? headers.length + 1 : headers.length
                    "
                    class="p-3 text-center"
                  >
                    No data
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-show="items.length === 0 && !loading"
              class="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 -translate-y-1/2"
            >
              No data
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DataTableHeader } from '~/contracts'
defineProps<{
    hideFilter: boolean,
    search: string,
    tableClass: string,
    loading: false,
    items: unknown[],
    totalItems: number,
    showIndexColumn: boolean,
    headers: DataTableHeader[],
    height: number,
    minWidth: number
}>()

function clickable () {
  return !!this.$listeners['row:click']
}

function onRowClick (row: number) {
  console.warn(row)
}

function getValueByPath (row: number, value: string) {
  console.warn(row, value)
}

function getRowNumber (value: number) {
  console.warn(value)
}
</script>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  value: number;
}>()
const emit = defineEmits<{
  updateValue: [value: number, id: number]
}>()

const value = ref(props.value)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  value.value = parseInt(target.value, 10)
  emit('updateValue', value.value, props.id)
}

const handleDecrement = () => {
  value.value = Math.max(1, value.value - 1)
  emit('updateValue', value.value, props.id)
}

const handleIncrement = () => {
  value.value = value.value + 1
  emit('updateValue', value.value, props.id)
}
</script>

<template>
  <button
:id="`decrement-button-${id}`" type="button" data-input-counter-decrement="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          @click="handleDecrement">
    <svg
class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 18 2">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
    </svg>
  </button>
  <input
    :id="`counter-input-${id}`"
    type="text"
    data-input-counter
    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
    placeholder=""
    :value="value"
    required
    @input="handleInput" />
  <button
:id="`increment-button-${id}`" type="button" data-input-counter-increment="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          @click="handleIncrement">
    <svg
class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 18 18">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
    </svg>
  </button>
</template>

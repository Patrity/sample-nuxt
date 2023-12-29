<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient()

import {definePageMeta} from "nuxt/dist/pages/runtime";

definePageMeta({
  middleware: 'auth',
})

const count = ref(0)
onMounted(() => {
	count.value = 1
})
const increment = () => {
	count.value++
}
const decrement = () => {
	count.value--
}
</script>
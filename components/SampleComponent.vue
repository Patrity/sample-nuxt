<template>

</template>

<script setup lang="ts">
const props = defineProps({
	msg: {
		type: String,
		required: true
	}
})
const emit = defineEmits(['update:msg'])
const msg = useVModel(props, 'msg', emit)
</script>
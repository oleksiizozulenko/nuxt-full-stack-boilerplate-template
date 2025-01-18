<template>
	<input type="file" @input="handleFileInput" />
    <button @click="submit">submit</button>

	<span> {{ response  }}</span>
</template>

<script setup>
	// handleFileInput can handle multiple files
	// clearOldFiles: true by default, each time the user adds files the `files` ref will be cleared
	const { handleFileInput, files } = useFileStorage({ clearOldFiles: false })

    const submit = async () => {
	const response = await $fetch('/api/files', {
		method: 'POST',
		body: {
			files: files.value
		}
	})
	console.log(response)
}
</script>
<script setup lang="ts">
import type { NuxtError } from '#app'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    error: Object as () => NuxtError
})

</script>

<template>
    <div>
        <h1 v-if="error">{{ error.statusCode }}</h1>
        <NuxtLink to="/">Go back home</NuxtLink>
    </div>
</template>

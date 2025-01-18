<script setup lang="ts">

const { data } = await useFetch('/api/hello')


const { data: home } = await useAsyncData(() => queryCollection('docs').path('/').first())

const store = userStore()

useColorMode()
const { setLocale } = useI18n()

</script>

<template>
  <div>
    <h1>Data from API fetch</h1>
    <pre>{{ data }}</pre>

    <h1>Data from Content Folder</h1>
    <p>{{ home }}</p>

    <p>Save File Example</p>
    <SaveFileExample />


    <h1>Pinia Store Integration</h1>
    <span>{{ store.user?.name }}</span>

    <p>Translations </p>

    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('uk')">uk</button>
      <p>{{ $t('welcome') }}</p>
    </div>



    <h1>Color mode: {{ $colorMode.value }}</h1>

    <h2>Nuxt/Icon
      <Icon name="uil:github" style="color: black" />
    </h2>

    <div>
      <!--
    Date.now() will safely respect the time on the server, not on the
    client. What's more, there will be no flash between server
    and client locale formatting.
  -->
    <p>
      <NuxtTime :datetime="Date.now()" second="numeric" month="long" day="numeric" />
    </p>
      <!--
    This will display the time relative to the current time, e.g., "5 minutes ago"
  -->
    <p>
      <NuxtTime :datetime="Date.now() - 5 * 60 * 1000" relative />
    </p>
    </div>


  </div>
</template>

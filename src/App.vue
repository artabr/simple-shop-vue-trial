<script setup lang="ts">
// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || 'Vue Shop',
})

</script>
<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

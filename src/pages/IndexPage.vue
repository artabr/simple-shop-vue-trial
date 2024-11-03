<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Product } from '@/lib/types'
import { apiFetch } from '@/lib/request'

// export default {
//   data () {
//     return {
//       loading: false,
//       post: null,
//       error: null
//     }
//   },
//   created () {
//     // fetch the data when the view is created and the data is
//     // already being observed
//     this.fetchData()
//   },
//   watch: {
//     // call again the method if the route changes
//     '$route': 'fetchData'
//   },
//   methods: {
//     fetchData () {
//       this.error = this.post = null
//       this.loading = true
//       const fetchedId = this.$route.params.id
//       // replace `getPost` with your data fetching util / API wrapper
//       getPost(fetchedId, (err, post) => {
//         // make sure this request is the last one we did, discard otherwise
//         if (this.$route.params.id !== fetchedId) return
//         this.loading = false
//         if (err) {
//           this.error = err.toString()
//         } else {
//           this.post = post
//         }
//       })
//     }
//   }
// }

onBeforeMount (() => {
  fetchProducts()
})

const loading = ref(false)
const products = ref<Product[]>([])
const error = ref<unknown | null>(null)

const fetchProducts = async () => {
  try {
    loading.value = true
    const response = await apiFetch('/products')
    products.value = response.items
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
        <div>
          <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Electronics</h2>
        </div>
      </div>
      <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        <div v-if="loading">
          Loading...
        </div>
        <div v-else-if="error">
          <p>Error: {{ error }}</p>
        </div>
        <ProductCard v-for="product in products" v-else :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>

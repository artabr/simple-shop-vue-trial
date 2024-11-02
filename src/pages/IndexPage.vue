<script setup lang="ts">
const store = useStore()
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
        <ProductCard id="1" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="2" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="3" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="4" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="5" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="6" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="7" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
        <ProductCard id="8" title='Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max' image-src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" />
      </div>
    </div>
  </section>
</template>

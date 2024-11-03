<script setup lang="ts">
import router from '@/router'

const store = useStore()

const props = defineProps<{
  title?: string;
}>()

defineExpose(props)

function handleCartDropdownClick() {
  router.push('/cart');
}
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <RouterLink to="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Vue Shop</span>
        </RouterLink>
        <div class="flex items-center lg:order-2 lg:space-x-2">

          <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white" @click="handleCartDropdownClick">
          <span class="sr-only">
            Cart
          </span>
            <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>
            <span class="hidden sm:flex">My Cart{{ store.cartItemsCount ? ` (${store.cartItemsCount})` : ''}}</span>
            <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>
          </button>

          <div id="myCartDropdown1" class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
            <div class="grid grid-cols-2">
              <div>
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPhone 15</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>

                <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPad Air</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$499</p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>

                <button data-tooltip-target="tooltipRemoveItem2a" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem2a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple Watch SE</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$598</p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 2</p>

                <button data-tooltip-target="tooltipRemoveItem3b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem3b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Sony Playstation 5</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$799</p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>

                <button data-tooltip-target="tooltipRemoveItem4b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem4b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iMac 20"</a>
                <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$8,997</p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 3</p>

                <button data-tooltip-target="tooltipRemoveItem5b" type="button" class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span class="sr-only"> Remove </span>
                  <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div id="tooltipRemoveItem5b" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
          </div>

          <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
          <span class="sr-only">
            Open Menu
          </span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </button>
        </div>
        <div id="mobile-menu-2" class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <RouterLink to="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/team" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Our Team</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact-us" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

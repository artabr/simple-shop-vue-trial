import { defineStore } from 'pinia'
import type { CartItem, Product } from '@/lib/types'
import { useLocalStorage } from '@vueuse/core'

export const useStore = defineStore('main', {
  state: () => ({
    cart: useLocalStorage<CartItem[]>('pinia/cart', []),
  }),

  actions: {
    addProductToCart(product: Product) {
      const existingItem = this.cart.find(item => item.product.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({
          id: product.id,
          quantity: 1,
          product,
        })
      }
    },

    removeProductFromCart(id: number) {
      const index = this.cart.findIndex(item => item.id === id)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    },

    clearCart() {
      this.cart = []
    },

    updateCartQuantity({ id, quantity }: { id: number; quantity: number }) {
      const item = this.cart.find(item => item.id === id)
      if (item) {
        item.quantity = quantity
      }
    },

    incrementCartQuantity(id: number) {
      const item = this.cart.find(item => item.id === id)
      if (item) {
        item.quantity++
      }
    },

    decrementCartQuantity(id: number) {
      const item = this.cart.find(item => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      }
    }
  },

  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
    },

    cartItemsCount(state) {
      return state.cart.length
    },

    cartItems(state) {
      return state.cart
    }
  },
})

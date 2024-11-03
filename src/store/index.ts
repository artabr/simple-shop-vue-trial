import { defineStore } from 'pinia'
import type { CartItem, Product } from '@/lib/types'

type AppState = {
  cart: CartItem[];
}

export const useStore = defineStore('main', {
  state: (): AppState => ({
    cart: [],
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

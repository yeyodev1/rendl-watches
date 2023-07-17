import { defineStore } from 'pinia';

interface RootState {
  isOpen: boolean;
}

export const useMenuStore = defineStore('MenuStore', {
  state: (): RootState => ({
    isOpen: false
  }),

  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      console.log('holaa')
    }
  }
})

export default useMenuStore;
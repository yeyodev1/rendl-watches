import { defineStore } from 'pinia';
import WatchesService from '../api/WatchesService';

const watchesService = new WatchesService();

const useWatchStore = defineStore('useWatchStore', {
  state: () => ({
    products: []
  }),
  actions: {
    async getWatches() {
      try {
        const products = await watchesService.getWatches()
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export default useWatchStore;
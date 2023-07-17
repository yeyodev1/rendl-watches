import { defineStore } from 'pinia';
import WatchesService from '../api/WatchesService';

const watchesService = new WatchesService();

const useWatchStore = defineStore('useWatchStore', {
  state: () => ({
    manWatches: []
  }),
  actions: {
    async getWatches(gender: string) {
      try {
        const products = await watchesService.getWatches(gender);
        this.manWatches = products.data.stories
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export default useWatchStore;
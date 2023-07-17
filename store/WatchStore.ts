import { defineStore } from 'pinia';
import WatchesService from '../api/WatchesService';

const watchesService = new WatchesService();

const useWatchStore = defineStore('useWatchStore', {
  state: () => ({
    manWatches: [],
    womanWatches: [],
    allWatches: [],
  }),
  actions: {
    async getWatches(gender: string) {
      try {
        const products = await watchesService.getWatches(gender);
        if (gender === 'men') {
          this.manWatches = products.data.stories;
        } else if (gender === 'woman') {
          this.womanWatches = products.data.stories;
        }
        this.allWatches =  [...this.manWatches, ...this.womanWatches];
      } catch (error) {
        console.error(error);
      }
    }
  }
})

export default useWatchStore;
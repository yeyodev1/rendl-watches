import { defineStore } from 'pinia';
import WatchesService from '../api/WatchesService';
import { Watch } from '@/enum/Watch';

const watchesService = new WatchesService();

const useWatchStore = defineStore('useWatchStore', {
  state: () => ({
    manWatches: [],
    womanWatches: [],
    allWatches: [],
    offerWatches: [],
  }),
  actions: {
    async getWatches(gender: string) {
      try {
        const products = await watchesService.getWatches(gender);
        if (gender === Watch.MEN) {
          this.manWatches = products.data.stories;
        } else if (gender === Watch.WOMEN) {
          this.womanWatches = products.data.stories;
        }
        this.allWatches = [...this.manWatches, ...this.womanWatches];
        this.offerWatches = this.allWatches.filter(watch => watch.content.old_price)
      } catch (error) {
        console.error(error);
      }
    }
  }
})

export default useWatchStore;
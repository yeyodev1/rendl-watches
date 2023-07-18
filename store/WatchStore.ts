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
    watch: null
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
    },
    async getWatchBySlug(slug: string): Promise<void> {
      try {
        const response = await watchesService.getWatchBySlug(slug);
        this.watch = response.data.story
      } catch (err) {
        console.error(err)
      }
    }
  }
})

export default useWatchStore;
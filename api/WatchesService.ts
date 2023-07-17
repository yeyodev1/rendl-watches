import Storyblok from './StoryblokBaseService';

export default class WatchesService {
  async getWatches() {
    const response = await Storyblok.get(`stories`, {
      version: 'published',
      starts_with: 'men'
    })
    return response
  }
}
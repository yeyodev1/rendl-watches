import Storyblok from './StoryblokBaseService';

export default class WatchesService {
  async getWatches(gender: string) {
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: gender,
    })
    return response
  }
}
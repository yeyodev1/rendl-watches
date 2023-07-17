import Storyblok from './StoryblokBaseService';

export default class WatchesService {
  async getWatches(gender: string) {
    console.log(Storyblok)
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: gender,
    })
    return response
  }
}
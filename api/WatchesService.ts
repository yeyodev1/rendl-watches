import { AxiosResponse } from 'axios';
import BaseService from './BaseService';

export default class WatchesService extends BaseService {
  getWatches(): Promise<AxiosResponse> {
    return this.apiClient.get(`${this.apiBaseRoute}/stories`)
  }
}
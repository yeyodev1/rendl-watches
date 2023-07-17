import { AxiosInstance } from 'axios';
import crushAxios from './crushAxios';

export default class BaseService {
  apiClient: AxiosInstance = crushAxios;
  apiBaseRoute = 'https://api.storyblok.com/v2'
}
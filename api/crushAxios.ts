import axios from 'axios';

const crushAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

crushAxios.defaults.headers.put['Content-Type'] = 'application.json';
crushAxios.defaults.headers.post['Content-Type'] = 'application.json';
crushAxios.defaults.headers.delete['Content-Type'] = 'application.json';

crushAxios.interceptors.response.use(response => response, async (error) => {
  switch (error.reponse.status) {
    case 401:
      // unathorized
      await Promise.reject(error);
      break;
    case 403:
      // access-denied
      await Promise.reject(error);
      break;
    case 401:
      // service-down
      await Promise.reject(error);
      break;
  }

  return Promise.reject(error);
});

export default crushAxios;
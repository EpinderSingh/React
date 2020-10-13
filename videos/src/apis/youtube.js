import axios from 'axios';

const KEY = 'AIzaSyDdcpckMiW2VOTO8g-lG0eJTDG2MeW_OTE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

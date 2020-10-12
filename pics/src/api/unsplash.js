import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI'
      }
})
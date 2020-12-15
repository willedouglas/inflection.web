import axios from 'axios';

const api = (options) => axios.create({
  ...options,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2bc8c43f03c44e0d9d3e32a20aa18fd9',
  },
});

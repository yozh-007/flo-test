import axios from 'axios';

export default axios.create({
  baseURL: 'https://flo-plans.firebaseio.com/',
});

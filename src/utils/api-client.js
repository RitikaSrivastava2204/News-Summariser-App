import axios from './axios-config';

const getNews = async()=>{
    const response = await axios.get(import.meta.env.VITE_URL);
    return response.data;
}
export default getNews;
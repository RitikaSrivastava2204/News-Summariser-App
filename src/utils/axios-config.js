import axios from 'axios'

const configAxios = 
    axios.create({
        baseURL: import.meta.env.VITE_APP_BASE_URL,
        timeout: 3000,
        headers: {"Content-Type":"application/json"}
    })


export default configAxios;
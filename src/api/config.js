import axios from 'axios'

export const baseUrl = 'http://localhost:3000/'

const instance = axios.create({
    baseURL: baseUrl
})

instance.interceptors.response.use(res => {
    return res.data;
}, err => {
    console.log('网络错误', err)
})

export default instance
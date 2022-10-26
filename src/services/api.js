import axios from 'axios'

const api = axios.create({
    baseURL: '  https://blog-notices.herokuapp.com/api'
    // baseURL: '  http://localhost:3000/'
})

export default api

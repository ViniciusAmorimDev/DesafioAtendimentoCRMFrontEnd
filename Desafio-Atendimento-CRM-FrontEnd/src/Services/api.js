import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:7037/api' // API de exemplo
})

export default api

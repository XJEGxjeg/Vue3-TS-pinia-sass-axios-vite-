import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
http.interceptors.request.use(config => {
    // 可在此添加token等逻辑
    return config
})

// 响应拦截器
http.interceptors.response.use(
    response => response.data,
    error => {
        // 统一错误处理
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)

export default http
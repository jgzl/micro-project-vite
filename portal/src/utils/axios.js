import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_APP_BASE_API, // 此处的 /admin-api/ 地址，原因是后端的基础路径为 /admin-api/
    // 超时
    timeout: 30000,
    // 禁用 Cookie 等信息
    withCredentials: true,
})

export default service
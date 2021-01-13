// const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const BASE_URL = 'https://store-qa.samudramarket.com/'
const TENANT_KEY = 'oiya-cafe-indore'
const API_URL = `${BASE_URL}${TENANT_KEY}`
const POSTS = 'posts'
const getAppConfig = () => `${API_URL}/getAppConfigs`
export { BASE_URL, POSTS, getAppConfig, }
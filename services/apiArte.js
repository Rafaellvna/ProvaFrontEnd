const { default: axios } = require("axios");

const apiArte = axios.create({
    baseURL: 'https://api.artic.edu/api/v1'
})

export default apiArte
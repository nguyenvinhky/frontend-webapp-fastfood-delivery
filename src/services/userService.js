import axios from "../axios";

const handleLoginAPI = (username, password) => {
    return axios.post('/api/login', {username, password});
}

export { handleLoginAPI }
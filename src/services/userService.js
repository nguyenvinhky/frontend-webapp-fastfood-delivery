import axios from "../axios";

const handleLoginAPI = (user, pass) => {
    return axios.post('/api/login', {username: user, password: pass});
}

export { handleLoginAPI }
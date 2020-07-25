import axios from "axios";

const axiosConfig = (otherHeaders = {}) => {
    axios.defaults.baseURL = 'http://test.nbssiyoungafricaworks.com:8081/'
    const axiosHeaderConfig = {
        "Content-Type": "application/json",
        ...otherHeaders
    }
    return {axios, axiosHeaderConfig};
}

export default axiosConfig;
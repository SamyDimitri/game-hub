import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : '1d6ecc6b42234432a434b1a2327b9b0e'
    }
})
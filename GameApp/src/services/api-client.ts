import axios from 'axios';

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "ccc08cb3c588424bb928e089d5fee145"
    }
})
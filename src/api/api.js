import axios from "axios";

export default axios.create({
    baseURL: `http://34.101.68.137:8000/api/`
})
import axios from "axios";
import apiBaseURL from "./apiBaseURL";

export default axios.create({
    baseURL: `${apiBaseURL}api/`
})
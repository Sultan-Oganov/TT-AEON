import axios from "axios"

export const instance = axios.create({
    baseURL: 'http://82.202.204.94/tmp/test.php/',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
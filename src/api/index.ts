import { instance } from "../modules/axios"

export const API = {
    getData() {
        return instance.get(``);
    }
}
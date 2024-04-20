import axios from "axios"
import {URL_API, TOKEN_NAME} from "@/configs"

export default class Http {
    constructor(status) {
        const token = localStorage.getItem(TOKEN_NAME)

        const headers = status.auth ? {
            Auhtorization: `Bearer ${token}`
        } : {}

        this.instance = axios.create({
            baseURL: URL_API,
            headers: headers
        })

        return this.instance
    }
}
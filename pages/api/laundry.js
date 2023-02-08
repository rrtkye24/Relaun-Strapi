import axios from "axios";

export async function login(data) {
    try {
        const res = await axios.post('http://localhost:1337/auth/local', data)
        if (res.data.jwt) {
            setCookie('token', res.data.jwt)
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
        return false
    }
}

import axios from "axios";
import md5 from "md5";

const publicKey = "086e99c76197ece0d8eb419365ab52e2";
const privateKey = "b2969d97eea8da420648e54a0caebe0616a1257e";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey)

export const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public`,
    params: {
        apikey: publicKey,
        ts,
        hash
    }
})
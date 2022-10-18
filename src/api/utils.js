import axios from "axios";
import md5 from "md5";

const {
  REACT_APP_BASE_URL: BASE_URL,
  REACT_APP_API_KEY: API_KEY,
  REACT_APP_PRIVATE_KEY: PRIVATE_KEY,
} = process.env;
const TS = Date.now().toString();

const HASH = md5(TS + PRIVATE_KEY + API_KEY);

export const fetchMarvel = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
    ts: TS,
    hash: HASH,
  },
});

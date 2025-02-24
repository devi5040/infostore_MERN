//If cookies does not sent with req we can use these
import axios from 'axios';
import {CookieJar} from 'tough-cookie';
import {wrapper} from 'axios-cookiejar-support';

const cookieJar = new CookieJar ();

const api = wrapper (
  axios.create ({
    baseURL: 'http://localhost:8080/',
    jar: cookieJar,
    withCredentials: true,
  })
);

export default api;

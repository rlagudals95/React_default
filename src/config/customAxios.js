import axios, { AxiosInstance } from "axios";
import { config } from "./confing";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`, // 기본 서버 주소 입력
  // headers: {
  //   access_token: cookies.get('access_token'),
  // },
});

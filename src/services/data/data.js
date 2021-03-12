import axios from "axios";

const hostName = "https://vitrazai.lt/wp-json/wp/v2/";

export function getData(endPoint) {
  return axios.get(hostName + endPoint).then((res) => {
    return res.data;
  });
}

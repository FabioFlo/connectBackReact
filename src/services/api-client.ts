import axios, { CanceledError } from "axios";
// Questo modulo verrà utilizzato solo per contenere gli URL
/* export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError }; */

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e62c0167250a4864a0011080a2a3874d",
  },
});

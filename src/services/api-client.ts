import axios, { CanceledError } from "axios";
// Questo modulo verrà utilizzato solo per contenere gli URL
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError };

import axios, { CanceledError } from "axios";
// Questo modulo verrà utilizzato solo per contenere gli URL
/* export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError }; */

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "96f7eeb3119e47659952196df5829280",
  },
});

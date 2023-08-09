import axios from "axios";

export default async function FetchProductsImage(username) {
  return await axios.post("http://100093.pythonanywhere.com/api/getproducts/", {
    username,
  });
}

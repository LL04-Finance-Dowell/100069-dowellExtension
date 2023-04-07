import axios from "axios";

export default async function FetchProducts() {
  return await axios.get("https://100096.pythonanywhere.com/product_list");
}

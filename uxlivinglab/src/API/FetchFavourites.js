import axios from "axios";

export default async function FetchFavourites() {
  return await axios.get("https://100092.pythonanywhere.com/favourite/favourite/")
}

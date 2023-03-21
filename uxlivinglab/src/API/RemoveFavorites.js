import axios from "axios";

export default async function RemoveFavorites(data) {
  return await axios.delete(
    `https://100092.pythonanywhere.com/favourite/favourite/${data.id}`
  );
}

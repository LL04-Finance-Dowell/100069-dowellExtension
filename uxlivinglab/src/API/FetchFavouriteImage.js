import axios from "axios";

export default async function FetchFavouriteImage(username) {
  return await axios.get(
    `https://100092.pythonanywhere.com/favourite/favouriteImage/${username}`
  );
}

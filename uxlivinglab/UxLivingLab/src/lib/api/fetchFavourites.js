import axios from "axios";

export default async function FetchFavourites(userID) {
  return await axios.get(
    `https://100092.pythonanywhere.com/api/v1/users/${userID}/favorites/`
    // `https://100092.pythonanywhere.com/favourite/favouriteImage/${username}`
  );
}

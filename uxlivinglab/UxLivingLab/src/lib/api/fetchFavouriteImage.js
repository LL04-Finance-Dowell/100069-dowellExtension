import axios from "axios";

export default async function FetchFavouriteImage(userID) {
  return await axios.get(
    `https://100092.pythonanywhere.com/api/v1/favorites/${userID}/images/`
    // `https://100092.pythonanywhere.com/favourite/favouriteImage/${username}`
  );
}

import axios from "axios";

export default async function SendFavourites(data) {
  return await axios.post(
    "https://100092.pythonanywhere.com/favourite/favourite/",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}

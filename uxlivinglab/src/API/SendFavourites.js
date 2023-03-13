import axios from "axios";

export default async function SendFavourites(data, username) {
  let formData = new FormData();
  if (data.image) formData.append("image", data.image, data.image.name);
  formData.append("username", username);
  formData.append("productName", data.productName);
  formData.append("orgName", data.orgName);
  formData.append("portfolio", data.portfolio);
  formData.append("action", data.action === "add" ? true : false);

  return await axios.post(
    "https://100092.pythonanywhere.com/favourite/favourite/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}

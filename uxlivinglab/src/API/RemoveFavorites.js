import axios from "axios";

export default async function RemoveFavorites(data) {
  // let formData = new FormData();
  // formData.append("username", data.username);
  // formData.append("productName", data.productName);
  // formData.append("orgName", data.orgName);
  // formData.append("portfolio", data.portfolio);
  // formData.append("action", false);
  return await axios.delete(
    `https://100092.pythonanywhere.com/favourite/favourite/${data.id}`,
    
  );
}

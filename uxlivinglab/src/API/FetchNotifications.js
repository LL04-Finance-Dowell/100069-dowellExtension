import axios from "axios";

export default async function FetchNotifications() {
  return await axios.get("https://100092.pythonanywhere.com/api/v1/notifications/products/")
}

import axios from "axios";

export default async function UpdateNotifications(pk) {
  return await axios.put(`https://100092.pythonanywhere.com/notification/notification/${pk}`, {
    seen: true
  })
}
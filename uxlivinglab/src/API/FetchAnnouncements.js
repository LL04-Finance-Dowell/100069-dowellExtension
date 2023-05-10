import axios from "axios";

export default async function FetchAnnouncements() {
  return await axios.get("http://100092.pythonanywhere.com/announcement/");
}

import axios from "axios";

export default async function FetchAnnouncements() {
  return await axios.get("https://100092.pythonanywhere.com/api/v1/announcements/?type=extension&user_id=6390b31ed77dc467630713f9&member_type=Public");
}

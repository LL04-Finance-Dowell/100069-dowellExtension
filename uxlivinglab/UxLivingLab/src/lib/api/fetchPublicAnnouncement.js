import axios from "axios";

export default async function FetchPublicAnnouncements(userId) {
  return await axios.get(
    `https://100092.pythonanywhere.com/api/v1/announcements/?type=extension&user_id=${userId}&member_type=Public`
  );
}

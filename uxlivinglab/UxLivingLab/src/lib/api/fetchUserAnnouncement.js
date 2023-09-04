import axios from "axios";

export default async function FetchUserAnnouncements(
  user_id
  // org_id = "6391864708acbf5dbc45a80c"
) {
  return await axios.get(
    `https://100092.pythonanywhere.com/api/v1/announcements/?type=extension&user_id=${user_id}&member_type=User`
  );
}

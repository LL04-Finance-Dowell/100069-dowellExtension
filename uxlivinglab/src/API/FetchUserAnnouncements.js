import axios from "axios";

export default async function FetchUserAnnouncements(user_id, org_id) {
    return await axios.get(`https://100092.pythonanywhere.com/api/v1/announcements/?type=extension&user_id=${user_id}&member_type=User&org_id=${org_id}`);
}

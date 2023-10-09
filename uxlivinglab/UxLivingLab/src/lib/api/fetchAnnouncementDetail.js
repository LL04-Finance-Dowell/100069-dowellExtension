import axios from "axios";

export default async function FetchAnnouncementDetail(id) {
    // console.log(id)
    return await axios.get(
        `https://100092.pythonanywhere.com/api/v1/announcements/${id}/`
    );
}

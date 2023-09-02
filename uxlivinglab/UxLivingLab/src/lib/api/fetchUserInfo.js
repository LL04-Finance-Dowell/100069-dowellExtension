import axios from "axios";

export default async function FetchUserInfo(sessionId) {
  return await axios.post("https://100014.pythonanywhere.com/api/userinfo/", {
    session_id: sessionId,
  });
}

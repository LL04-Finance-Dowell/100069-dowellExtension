import axios from "axios";

export default async function CreateMessage(data) {
  return await axios.post(
    `https://100096.pythonanywhere.com/api/v2/room-service/`,
    data
  );
}

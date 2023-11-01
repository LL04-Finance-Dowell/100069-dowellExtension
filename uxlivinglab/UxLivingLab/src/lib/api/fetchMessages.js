import axios from "axios";

export default async function FetchMessage(roomId) {
  // console.log(id)
  return await axios.get(
    `https://100096.pythonanywhere.com/api/v2/room-service/?type=get_messages&room_id=${roomId}`
  );
}

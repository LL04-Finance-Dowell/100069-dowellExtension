import axios from "axios";

export default async function CreateRoom(data) {
  // console.log(id)
  return await axios.post(
    `https://100096.pythonanywhere.com/api/v2/room-control/`,
    data
  );
}

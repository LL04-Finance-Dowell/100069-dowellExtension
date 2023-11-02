import axios from "axios";

export default async function CreateRoom(data) {
  // console.log(data);
  return await axios.post(
    `https://100096.pythonanywhere.com/api/v2/room-control/`,
    data
  );
}

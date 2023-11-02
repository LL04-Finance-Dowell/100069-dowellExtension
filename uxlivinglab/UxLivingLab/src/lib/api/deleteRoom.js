import axios from "axios";

export default async function DeleteRoom(data) {
  // console.log(id)
  return await axios.post(
    `https://100096.pythonanywhere.com/api/v2/room-service/`,
    data
  );
}

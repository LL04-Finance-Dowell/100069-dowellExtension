import axios from "axios";

export default async function FetchProfile(username) {
  console.log(username);
  return await axios.get(
    `https://100097.pythonanywhere.com/user/?username=${username}`
  );
}

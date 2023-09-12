import axios from "axios";

export default async function FetchService(workspaceId) {
  return await axios.get(
    `https://100105.pythonanywhere.com/api/v3/user/?type=get_api_key&workspace_id=${workspaceId}`
  );
}

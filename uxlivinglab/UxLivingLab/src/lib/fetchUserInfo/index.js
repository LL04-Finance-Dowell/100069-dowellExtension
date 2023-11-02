import { useQuery } from "react-query";
import FetchUserInfo from "../api/fetchUserInfo";

export const useUserInfo = (sessionId) =>
  useQuery("userInfo", () => FetchUserInfo(sessionId));

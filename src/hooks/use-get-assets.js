import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fireBaseAxios } from "../api/axios";

export default function useGetAssets() {
  const uid = useSelector((state) => state.auth.uid);

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await fireBaseAxios.get("users.json");
      return users.data;
    },
    enabled: !!uid,
    staleTime: Infinity,
    select: (data) => {
      let assets;
      if (uid && data && data[uid]) {
        assets = data[uid].assets;
      } else {
        assets = {
          message: "You are not authorized.",
        };
      }
      return assets;
    },
  });

  return usersQuery;
}

import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";
import axios, { fireBaseAxios } from "../api/axios";

export default function useGetAssets() {
  const uid = useSelector((state) => state.auth.uid);

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await fireBaseAxios.get("users");
      return users.data;
    },
    enabled: !!uid,
    staleTime: Infinity,
    select: (data) => {
      let assets;
      if (uid && data) {
        assets = data[uid].assets;
      } else {
        assets = {
          message: "You are not authorized.",
        };
      }
      return assets;
    },
  });

  // let assets;
  // if (uid && usersQuery.data) {
  //   assets = usersQuery.data[uid].assets;
  // } else {
  //   assets = {
  //     message: "You are not authorized.",
  //   };
  // }
  // return {
  //   ...usersQuery,
  //   data: assets,
  // };
  return usersQuery;
}

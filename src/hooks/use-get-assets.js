import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";

export default function useGetAssets() {
  const uid = useSelector((state) => state.auth.uid);
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const usersData = await fetch("http://localhost:8000/users");
      const users = await usersData.json();
      return users;
    },
    enabled: !!uid,
    staleTime: Infinity,
  });

  let assets;
  if (uid && usersQuery.data) {
    assets = usersQuery.data[uid].assets;
  } else {
    assets = {
      message: "You are not authorized.",
    };
  }
  return {
    ...usersQuery,
    data: assets,
  };
}

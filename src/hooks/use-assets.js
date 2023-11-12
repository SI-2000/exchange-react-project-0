import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";

export default function useAssets() {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  return useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const assetsData = await fetch("http://localhost:8000/users");
      const users = await assetsData.json();
      return users;
    },
    enabled: !!uid,
    select: (data) => {
      return data[`${uid}`].assets;
    },
    onSuccess: (data) => {
      dispatch(assetsActions.setAssets(data));
    },
  });
}

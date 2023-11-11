import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export default function useAssets() {
  const uid = useSelector((state) => state.auth.uid);
  const usersDataQuery = useQuery({
    queryKey: ["usersDataQuery"],

    queryFn: async () => {
      const assetsData = await fetch("http://localhost:8000/users");
      const users = await assetsData.json();
      return users;
    },
    enabled: !!uid,
  });

  return usersDataQuery;
}

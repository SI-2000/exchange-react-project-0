import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

const useSetTether = () => {
  const queryClient = useQueryClient();
  const uid = useSelector((state) => state.auth.uid);
  const tetherMutation = useMutation({
    mutationFn: async (newAmount) => {
      const users = queryClient.getQueryData("users");
      const assets = users[uid].assets;

      assets.tether = newAmount;

      const newData = { [uid]: { assets, ...users[uid] } };
      const resData = await fetch("http://localhost:8000/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      const res = await resData.json();
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  return tetherMutation;
};

export default useSetTether;

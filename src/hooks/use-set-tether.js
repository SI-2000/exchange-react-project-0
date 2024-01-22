import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios, { fireBaseAxios } from "../api/axios";

const useSetTether = () => {
  const queryClient = useQueryClient();
  const uid = useSelector((state) => state.auth.uid);
  const tetherMutation = useMutation({
    mutationFn: async (newAmount) => {
      const users = queryClient.getQueryData(["users"]);
      const assets = users[uid].assets;

      assets.tether = newAmount;

      const newData = { ...users, [uid]: { assets, ...users[uid] } };
      const resData = await fireBaseAxios.put("users.json", newData);
      return resData.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  return tetherMutation;
};

export default useSetTether;

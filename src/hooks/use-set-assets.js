import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";

export default function useSetAssets() {
  const uid = useSelector((state) => state.auth.uid);
  const queryClient = useQueryClient();

  const changeAssetMutation = useMutation({
    mutationFn: async (data) => {
      const users = queryClient.getQueryData("users");
      const assets = users[uid].assets;
      if (!assets.hasOwnProperty(data.pair)) {
        assets[data.pair] = 0;
      }

      if (data.formType === "buy") {
        assets[data.pair] = +assets[data.pair] + +data.inputs.amount.value;
        assets.tether =
          assets.tether - +data.inputs.price.value * +data.inputs.amount.value;
      } else if (data.formType === "sell") {
        assets[data.pair] = +assets[data.pair] - +data.inputs.amount.value;
        assets.tether =
          assets.tether + +data.inputs.price.value * +data.inputs.amount.value;
      }
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
  return changeAssetMutation;
}

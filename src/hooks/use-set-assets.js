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
        assets[data.pair] = +assets[data.pair] + +data.inputs.amount;
        assets.tether =
          assets[data.pair] - +data.inputs.price * +data.inputs.amount;
      } else if (data.formType === "sell") {
        assets[data.pair] = +assets[data.pair] - +data.inputs.amount;
        assets.tether =
          assets[data.pair] + +data.inputs.price * +data.inputs.amount;
      }
      console.log(assets)
    },
  });
  return changeAssetMutation
}

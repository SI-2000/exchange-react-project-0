import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { notificationActions } from "../store/notification";

export const useNotification = () => {
  const dispatch = useDispatch();

  const addNote = (props) => {
    dispatch(
      notificationActions.addNotification({
        id: v4(),
        ...props,
      })
    );
  };

  const removeNote = (id) => {
    dispatch(notificationActions.removeNotification(id));
  };

  return { addNote, removeNote };
};

import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message:String) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

// This Redux action creator is for actions related to messages (notifications) from APIs.
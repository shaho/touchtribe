import actions from "../actions";
import { Action, PlayerState } from "../../types/state";

const initialState = {
  videoSelected: -1,
  videos: [],
  offset: 3,
};

const reducer = (
  state: PlayerState = initialState,
  action: Action,
): PlayerState => {
  switch (action.type) {
    case actions.HYDRATE_VIDEO_DATA:
      return {
        ...state,
        videos: action.payload || [],
      };
    case actions.SELECT_VIDEO:
      return {
        ...state,
        videoSelected: action.payload || 0,
      };
    case actions.SET_OFFSET:
      return {
        ...state,
        offset: state.offset + action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

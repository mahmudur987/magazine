import { TOGGLE_SORT } from "../actionTypes/actionTypes";

const initialState = {
  ascending: true,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      return {
        ...state,
        ascending: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;

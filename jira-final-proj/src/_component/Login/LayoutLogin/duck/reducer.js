import * as ActionType from "./types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;

      return { ...state };
    }

    case ActionType.LOGIN_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case ActionType.LOGIN_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default loginReducer;

import {
  GetDataBegin,
  GetDataSuccess,
  GetDataFailed,
} from "../Actions/ApiJsonAction";

const initState = {
  data: [],
  error: null,
  isLoading: false,
};

const getJsonApi = (state = initState, action) => {
  switch (action.type) {
    case GetDataBegin:
      return {
        ...state,
        isLoading: true,
      };
    case GetDataSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GetDataFailed:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default getJsonApi;

import axios from "axios";

export const GetDataBegin = "GetDataBegin";
export const GetDataSuccess = "GetDataSuccess";
export const GetDataFailed = "GetDataFailed";

export const getDataBegin = () => {
  return {
    type: GetDataBegin,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GetDataSuccess,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GetDataFailed,
    error,
  };
};

export const getJsonApi = () => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
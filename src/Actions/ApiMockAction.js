import axios from "axios";

export const GetDataStart= "GetDataStart";
export const GetDataSukses = "GetDataSukses";
export const GetDataGagal= "GetDataGagal";

export const getDataBegin = () => {
  return {
    type: GetDataStart,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GetDataSukses,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GetDataGagal,
    error,
  };
};

export const getMockApi = () => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get("https://5ea06003eea7760016a91b3f.mockapi.io/city")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};

export const postMockApi = (obj) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .post("https://5ea06003eea7760016a91b3f.mockapi.io/city", obj)
      .then(() => dispatch(getMockApi()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};

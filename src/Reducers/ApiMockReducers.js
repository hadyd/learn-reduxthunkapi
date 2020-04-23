import {
    GetDataStart,
    GetDataSukses,
    GetDataGagal,
  } from "../Actions/ApiMockAction";
  
  const initState = {
    data: [],
    error: null,
    isLoading: false,
  };
  
  const getMockApi  = (state = initState, action) => {
    switch (action.type) {
      case GetDataStart:
        return {
          ...state,
          isLoading: true,
        };
      case GetDataSukses:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GetDataGagal:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  export default getMockApi ;
  
import { combineReducers } from "redux";

import getJsonApi from "./ApiJsonReducers";
import getMockApi from "./ApiMockReducers";

const rootReducer = combineReducers({ getJsonApi, getMockApi });

export default rootReducer;

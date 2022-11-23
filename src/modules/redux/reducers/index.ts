import { combineReducers } from "redux";
import { chartReducer } from './chartReducer';

export const rootReducer = combineReducers({
    chart: chartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
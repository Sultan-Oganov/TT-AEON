import { ChartAction, ChartReducerState, ChartActionTypes } from "../../types/chart"


const initialState: ChartReducerState = {
    data: {
        project: '',
        period: '',
        chart: [],
    },
    isLoading: false,
    error: null,
    dates: [],
    weekDates: [],
    hideInProgress: [],
}
export const chartReducer = (state = initialState, action: ChartAction): ChartReducerState => {
    const { type, payload } = action;
    switch (type) {
        case ChartActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case ChartActionTypes.SET_DATA:
            return {
                ...state,
                data: payload,
            }
        case ChartActionTypes.SET_DATES: {
            return {
                ...state,
                dates: payload
            }
        }
        case ChartActionTypes.SET_WEEK_DATES: {
            return {
                ...state,
                weekDates: payload
            }
        }
        case ChartActionTypes.TOGGLE_IS_HIDDEN: {
            return {
                ...state,
                hideInProgress: payload.isFetching
                ? [ payload.userId]
                : state.hideInProgress.filter(id => id != payload.userId)
            }
        }
        case ChartActionTypes.SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export interface IChart {
    id: number,
    title: string,
    period_start: string,
    period_end: string,
    sub: any[],
}

export interface ChartReducerState {
    data: {
        project: string,
        period: string,
        chart: Record<string, any>,
    },
    isLoading: boolean,
    error: null | string,
    dates: Date[],
    weekDates: string[],
    hideInProgress: number[],
}

export enum ChartActionTypes {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_DATA = "SET_DATA",
    SET_DATES = "SET_DATES",
    SET_WEEK_DATES = "SET_WEEK_DATES",
    TOGGLE_IS_HIDDEN = "TOGGLE_IS_HIDDEN",
    SET_ERROR = "SET_ERROR",
}

interface SetIsLoadingAction {
    type: ChartActionTypes.SET_IS_LOADING,
    payload: boolean
}

interface SetDataAction {
    type: ChartActionTypes.SET_DATA,
    payload: any
}

interface SetDatesAction {
    type: ChartActionTypes.SET_DATES,
    payload: any
}

interface SetWeekDatesAction {
    type: ChartActionTypes.SET_WEEK_DATES,
    payload: any
}

interface ToggleIsHiddenAction {
    type: ChartActionTypes.TOGGLE_IS_HIDDEN,
    payload: any
}

interface SetErrorAction {
    type: ChartActionTypes.SET_ERROR,
    payload: any
}

export type ChartAction = SetIsLoadingAction | SetDataAction | SetDatesAction | SetWeekDatesAction | ToggleIsHiddenAction  | SetErrorAction;

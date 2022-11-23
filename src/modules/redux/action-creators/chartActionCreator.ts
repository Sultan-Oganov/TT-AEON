import { ChartAction, ChartActionTypes } from '../../types/chart';
import { Dispatch } from "redux";
import { API } from '../../../api';
import { convertDate, getDatesInRange } from '../../../utils';
import format from 'date-fns/format';
import { addDays } from 'date-fns';

export const setIsLoading = (payload: boolean) => ({ type: ChartActionTypes.SET_IS_LOADING, payload });
export const setData = (payload: any) => ({ type: ChartActionTypes.SET_DATA, payload });
export const setDates = (payload: any) => {
    const [startDate, endDate] = convertDate(payload);
    return { type: ChartActionTypes.SET_DATES, payload: getDatesInRange(startDate, endDate)};
};
export const setWeekDates = (payload: any) => {
    const [startDate, endDate] = convertDate(payload);

    return { type: ChartActionTypes.SET_WEEK_DATES, payload: getDatesInRange(startDate, endDate, 7).map((el: Date) =>{
        const lastDayOfWeek = addDays(el, 6)
        return `${format(el, 'dd MMM')} - ${format(lastDayOfWeek, 'dd MMM')} ` 
        })};
}
export const toggleIsHidden = (payload: any) => ({type: ChartActionTypes.TOGGLE_IS_HIDDEN, payload:{isFetching: payload.isFetching, userId: payload.userId}})
export const setError = (payload: any) => ({ type: ChartActionTypes.SET_ERROR, payload });

export const getData = () => (dispatch: Dispatch<ChartAction>) => {
    dispatch(setIsLoading(true));
    API.getData()
        .then((response) => {
            dispatch(setData(response.data));
            dispatch(setDates(response.data.period) as any);
            dispatch(setWeekDates(response.data.period) as any);
        })
        .catch(error => {
            console.warn('Axios -> get: ', error);
            return error;
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const hideChart = (isFetching: boolean, userId: number) => (dispatch: Dispatch<ChartAction>) => {
    dispatch(toggleIsHidden({isFetching, userId })as any)
}
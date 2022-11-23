import PurpleIcon from '../assets/svg/PurpleIcon';
import GreenIcon from '../assets/svg/GreenIcon';
import LightningIcon from '../assets/svg/LightningIcon';
import RedIcon from '../assets/svg/RedIcon';
import YellowIcon from '../assets/svg/YellowIcon';
import { formatDistance } from 'date-fns';

export const getDatesInRange = (startDate: string, endDate: string, steps = 1) => {
    const dateArray = [];
    const currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        dateArray.push(new Date(currentDate));
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }

    return dateArray;
}

export const convertDate = (date: string) => {
    return date.split('-').map((el: string) => el.split('.').reverse().join('.'));

}

export const periodTaskDate = (startDate: number | Date | any, endDate: number | Date | any) => {
    return formatDistance(new Date(endDate), new Date(startDate))
}

export const removeLetters = (date: string) => {
    return date.split(/(\d+)/, 2)[1]
}

export const detectIcons = (count: number) => {
    switch (count) {
        case 1:
            return PurpleIcon
        case 2:
            return GreenIcon
        case 3:
            return YellowIcon
        case 4:
            return RedIcon
        default:
            return LightningIcon
    }
}

export const detectColor = (count: number) => {
    switch (count) {
        case 1:
            return '#497CF6'
        case 3:
        case 4:
            return '#2DB77B'
        default:
            return '#FFA530'
    }
}
import React from 'react';
import { useTypedSelector } from '../../modules/hooks/useTypeSelector';
import { IChart } from '../../modules/types/chart';
import { detectColor, periodTaskDate, removeLetters } from '../../utils';

interface Props {
    data: Record<string, any>,
}

const TimeLine: React.FC<Props> = ({ data }) => {
    const { hideInProgress}= useTypedSelector(state => state.chart);

    return (
        <>
            {
                data.sub?.map((el: IChart) => {
                    const daysCount = removeLetters(periodTaskDate(el.period_start, el.period_end))
                    if(el.id > hideInProgress[0]) {
                       return null
                    }
                    return <div key={el.id} >
                    <td className="time_line">
                        <div className="task" style={{
                            borderColor: `${detectColor(el.id)}`,
                            backgroundColor: `${detectColor(el.id)}9C`,
                            width: daysCount === undefined ? `24px` : `${(+daysCount + 1) * 24}px`
                        }}>
                        </div>
                        {el.title}
                    </td>
                   <TimeLine key={el.id} data={el} />
                </div>
                })
            }
        </>
    );
};

export default TimeLine;
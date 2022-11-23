import React, { useState, useMemo } from 'react';
import { useTypedSelector } from '../../modules/hooks/useTypeSelector';
import { detectColor, periodTaskDate, removeLetters } from '../../utils';
import Chart from '../../components/Chart/Chart';
import TimeLine from '../../components/Chart/TimeLine';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import PurpleIcon from '../../assets/svg/PurpleIcon';
import './styles.css';
import { useActions } from '../../modules/hooks/useActions';

const Home: React.FC = () => {
    const { isLoading, data, dates, weekDates } = useTypedSelector(state => state.chart);
    const { hideChart } = useActions();
    const [isOpen, setIsOpen] = useState(true);

    const daysCount = useMemo(() => {
        if (data.chart && data.chart.period_start) {
            return removeLetters(periodTaskDate(data.chart.period_start, data.chart.period_end))
        }
    }, [data.chart])

    const handleToggleIsOpen = () => {
        setIsOpen((prevIsOpen) => {
            hideChart(prevIsOpen, 1)
            return !prevIsOpen
        });

    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="home">
            <h1> {data.project} / {data.period}</h1>
            <table>
                <thead>
                    <tr>
                        <th className="left_side">Work item</th>
                        <div className="dates_week">
                            {weekDates.map((date, i) => <th key={i}>{date}</th>)}
                        </div>
                        <div className="dates">
                            {
                                dates.map((date, i) => {
                                    const isWeekend = new Date(date).getDay() === 3 || new Date(date).getDay() === 4;
                                    return (
                                        <th key={i} className={isWeekend ? 'date__weekend date' : 'date'}>{date.getDate()}</th>
                                    )
                                })
                            }
                        </div>
                    </tr>
                </thead>

                <tbody>
                    {[data.chart].map((_, i) => (
                        <tr key={i}>
                            <td>
                                <td className="row">
                                    <div onClick={handleToggleIsOpen} className={isOpen ? 'arrowDown arrow' : 'arrowUp arrow'}>
                                        <ArrowIcon />
                                    </div>
                                    <PurpleIcon />
                                    <p className="childs">{data.chart.sub?.length || 0}</p>
                                    {data.chart.title}
                                </td>
                                {isOpen && <Chart data={data.chart} indent={0} />}
                            </td>
                            <td>
                                <td className='time_line'>
                                    <div className="task" style={{
                                        borderColor: `${detectColor(data.chart.id)}`,
                                        backgroundColor: `${detectColor(data.chart.id)}9C`,
                                        width: `${(+daysCount! + 1) * 24}px`
                                    }}>
                                    </div>
                                    {data.chart.title}
                                </td>
                                {isOpen && <TimeLine data={data.chart} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Home;
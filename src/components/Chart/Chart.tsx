/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { IChart } from '../../modules/types/chart';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import { detectIcons } from '../../utils';
import { useActions } from '../../modules/hooks/useActions';

interface Props {
    data: Record<string, any>,
    indent: number,
}

const Chart: React.FC<Props> = ({ data, indent }) => {
    const { hideChart } = useActions();
    const [isOpen, setIsOpen] = useState(true);
    const handleToggleIsOpen = (id: number) => {
        setIsOpen((prevIsOpen) => {
            hideChart(prevIsOpen, id);
            return !prevIsOpen
        });
    };

    return (
        <>
            {
                data.sub?.map((el: IChart) => {
                    const Icon = detectIcons(el.id)
                    return (
                        <div className="left_side" key={el.id} >
                            <td className="row" style={{ paddingLeft: `${indent === 0 ? 25 : 8 + indent * 25}px` }}>
                                {
                                    el.sub && <div onClick={()=>handleToggleIsOpen(el.id)} className={isOpen ? 'arrowDown arrow' : 'arrowUp arrow'}>
                                        <ArrowIcon />
                                    </div>
                                }
                                <Icon />
                                <p className="childs">{el.sub ? el.sub.length : 0}</p>
                                {el.title}
                            </td>
                            {isOpen && <Chart key={el.id} data={el} indent={indent + 1} />}
                        </div>
                    )
                })
            }
        </>
    );
};

export default Chart;
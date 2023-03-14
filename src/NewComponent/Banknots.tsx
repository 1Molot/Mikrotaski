import React from 'react';
import {FilterType, MoneyType} from "../App";


type BanknotsType = {
    banknots:MoneyType[]
    onClickFilterHandler: (value :FilterType ) => void
}

export const Banknots = (props:BanknotsType) => {

    return (
        <div>
            <ul>
                {props.banknots.map((objFromMoneyArr, index) => (

                    <li key={index}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                ))}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler('all')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Ruble')}>Ruble</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    )
}
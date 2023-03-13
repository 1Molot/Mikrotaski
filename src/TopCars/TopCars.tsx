import React from 'react';
import {topCar} from "../App";



type TopCarsType = {
    topCars:topCar[]

}

export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            {props.topCars.map((objectFromTopCarsArray, string) => {
            return (
                <tr key={objectFromTopCarsArray.manufacturer}>
                    <th> model: {objectFromTopCarsArray.model}</th>
                </tr>
            )
            })
            }
        </table>
    )
}
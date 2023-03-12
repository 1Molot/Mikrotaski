import React from 'react';

type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}
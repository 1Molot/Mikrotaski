import React from 'react';

type FooterType = {
    title: string
}

export const Footer = (props:FooterType) => {
    return (
        <>{props.title}</>
    )
}
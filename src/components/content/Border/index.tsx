import * as React from 'react';

interface IProps {
    border: string;
}

export default (props: IProps) => {
    return (
        <div style={{
            background: `url(${props.border}) no-repeat`,
            backgroundSize: '100% 100%',
            height: '10vw',
            width: '100%',
        }} />
    )
}
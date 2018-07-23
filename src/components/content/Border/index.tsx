import * as React from 'react';

interface IProps {
    border: string;
}

export default (props: IProps) => {
    return (
        <div style={{
            background: `url(${props.border}) no-repeat`,
            height: '256px',
            width: '100%',
        }} />
    )
}
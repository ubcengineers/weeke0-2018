import * as React from 'react';
import { StyledDay, StyledEvent, StyledMuted, StyledSubtitle, StyledTitle, StyledWrapper } from './styled';

interface IProps {
    title: string;
    days: JSX.Element[];
    events: Array<{
        title: string;
        subtitle: string;
        day: number;
        start: number;
        end: number;
        muted?: boolean;
    }>;
}

export default (props: IProps) => {
    return (
        <StyledWrapper style={{gridTemplateColumns: `repeat(${props.days.length}, 1fr)`}}>
            <StyledDay style={{fontSize: '1.2em', gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: props.days.length + 1}}>
                {props.title}
            </StyledDay>
            {props.days.map((element, index) => (
                <StyledDay key={element.toString()} style={{gridRowStart: 2, gridColumnStart: index + 1}}>
                    {element}
                </StyledDay>
            ))}
            {props.events.map((element) => (
                <>
                {!element.muted ? 
                    <StyledEvent key={element.title} style={{gridRowStart: element.start * 2 - 13, gridRowEnd: element.end * 2 - 13, gridColumnStart: element.day}}>
                        <StyledSubtitle>
                            {element.subtitle}
                        </StyledSubtitle>
                        <StyledTitle>
                            {element.title}
                        </StyledTitle>
                    </StyledEvent>
                    :
                    <StyledMuted key={element.title} style={{gridRowStart: element.start * 2 - 13, gridRowEnd: element.end * 2 - 13, gridColumnStart: element.day}}>
                        <StyledSubtitle>
                            {element.subtitle}
                        </StyledSubtitle>
                        <StyledTitle>
                            {element.title}
                        </StyledTitle>
                    </StyledMuted>
                }
                </>
            ))}
        </StyledWrapper>
    )
}
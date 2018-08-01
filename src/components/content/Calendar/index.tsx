import * as React from 'react';
import { StyledDay, StyledEvent, StyledWrapper } from './styled';

interface IProps {
    title: string;
    events: Array<{
        title: string;
        day: number;
        start: number;
        end: number;
    }>;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            <StyledDay style={{fontSize: '1.2em', gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 5}}>
                {props.title}
            </StyledDay>
            <StyledDay style={{gridRowStart: 2, gridColumnStart: 1}}>
                Tuesday Sept 5th
            </StyledDay>
            <StyledDay style={{gridRowStart: 2, gridColumnStart: 2}}>
                Wednesday Sept 6th
            </StyledDay>
            <StyledDay style={{gridRowStart: 2, gridColumnStart: 3}}>
                Thursday Sept 7th
            </StyledDay>
            <StyledDay style={{gridRowStart: 2, gridColumnStart: 4}}>
                Friday Sept 8th
            </StyledDay>
            {props.events.map((element) => (
                <StyledEvent key={element.title} style={{gridRowStart: element.start * 2 - 13, gridRowEnd: element.end * 2 - 13, gridColumnStart: element.day - 1}}>
                    {element.title}
                </StyledEvent>
            ))}
        </StyledWrapper>
    )
}
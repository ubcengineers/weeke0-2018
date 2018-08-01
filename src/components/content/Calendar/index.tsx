import * as React from 'react';
import { StyledDay,
    StyledEvent,
    StyledModal,
    StyledModalBackground,
    StyledMuted,
    StyledSubtitle,
    StyledTitle,
    StyledWrapper
} from './styled';

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

export default class Calendar extends React.Component<IProps> {

    public state = {
        active: false,
        activeIndex: 0,
    }

    public render () {
        return (
            <>
            <StyledWrapper style={{gridTemplateColumns: `repeat(${this.props.days.length}, 1fr)`}}>
                {this.state.active ?
                    <StyledModalBackground className='fadein'>
                        <StyledModal>
                            Hello
                        </StyledModal>
                    </StyledModalBackground>
                    :
                    null
                }
                {this.props.days.map((element, index) => (
                    <StyledDay key={element.toString()} style={{gridRowStart: 1, gridColumnStart: index + 1}}>
                        {element}
                    </StyledDay>
                ))}
                {this.props.events.map((element, index) => (
                    <>
                    {!element.muted ? 
                        <StyledEvent 
                            key={element.title} 
                            style={{gridRowStart: element.start * 2 - 14, gridRowEnd: element.end * 2 - 14, gridColumnStart: element.day}}
                            onClick={this.handleClick(index)}
                        >
                            <StyledSubtitle>
                                {element.subtitle}
                            </StyledSubtitle>
                            <StyledTitle>
                                {element.title}
                            </StyledTitle>
                        </StyledEvent>
                        :
                        <StyledMuted key={element.title} style={{gridRowStart: element.start * 2 - 14, gridRowEnd: element.end * 2 - 14, gridColumnStart: element.day}}>
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
            </>
        )
    }

    public handleClick = (index: number) => () => {
        this.setState({active: true, activeIndex: index});
    }
}
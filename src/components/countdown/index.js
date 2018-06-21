import * as React from 'react';
import { StyledWrapper, StyledRow, StyledDigit, StyledCaption } from './styled';

export default class Countdown extends React.Component {

    constructor(props) {
        super(props);

        const {endTime} = this.props;
        const today = new Date().getTime();

        const diff = endTime - today;

        this.state = {
            days: Math.floor(diff / (1000*60*60*24)),
            hours: Math.floor(diff / (1000*60*60) % 24),
            minutes: Math.floor(diff / (1000*60) % (60)),
            seconds: Math.floor(diff / (1000) % (60)),
        }

        setTimeout(this.updateTime, 1000);
    }

    updateTime = () => {
        const {endTime} = this.props;
        const today = new Date().getTime();

        const diff = endTime - today;

        this.setState({
            days: Math.floor(diff / (1000*60*60*24)),
            hours: Math.floor(diff / (1000*60*60) % 24),
            minutes: Math.floor(diff / (1000*60) % (60)),
            seconds: Math.floor(diff / (1000) % (60)),
        })

        setTimeout(this.updateTime, 1000);
    }

    render() {
        return (
            <StyledWrapper>
                <StyledRow>
                    <StyledDigit>
                        {this.state.days}
                    </StyledDigit>
                    <StyledCaption>
                        {this.state.days === 1 ? 'day' : 'days'}
                    </StyledCaption>
                </StyledRow>
                <StyledRow>
                    <StyledDigit>
                        {this.state.hours}
                    </StyledDigit>
                    <StyledCaption>
                        {this.state.hours === 1 ? 'hour' : 'hours'}
                    </StyledCaption>
                </StyledRow>
                <StyledRow>
                    <StyledDigit>
                        {this.state.minutes}
                    </StyledDigit>
                    <StyledCaption>
                        {this.state.minutes === 1 ? 'minute' : 'minutes'}
                    </StyledCaption>
                </StyledRow>
                <StyledRow>
                    <StyledDigit>
                        {this.state.seconds}
                    </StyledDigit>
                    <StyledCaption>
                        {this.state.seconds === 1 ? 'second' : 'seconds'}
                    </StyledCaption>
                </StyledRow>
            </StyledWrapper>
        )
    }
}
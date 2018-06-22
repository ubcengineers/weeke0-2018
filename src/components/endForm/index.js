import React from 'react';
import { StyledWrapper, StyledContent, StyledFeature, StyledMain, StyledTextInput, StyledSubmit } from './styled';

class EndForm extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <StyledWrapper>
            <div />
            <StyledContent>
                <StyledFeature>
                    You made it to the end. Maybe we should keep in touch?
                </StyledFeature>
                <StyledMain>
                    <p>
                        I want to receive updates regarding Week E<sup>0</sup> and E-Retreat:
                    </p>
                    <form name="reach-out" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="reach-out" />
                    <StyledTextInput placeholder="Email" type="email" name="email" required={true}/>
                    <StyledSubmit type="submit">Submit</StyledSubmit>
                    </form>
                    <p>
                        <small>We won’t spam you or sell your information. We’re just a bunch of students volunteering for a good cause.</small>
                    </p>
                </StyledMain>
            </StyledContent>
            <div />
        </StyledWrapper>
    )
}

export default EndForm;
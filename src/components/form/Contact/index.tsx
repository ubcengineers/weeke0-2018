import * as React from 'react';
import { 
    StyledSubmit,
    StyledTextInput,
} from './styled';

class EndForm extends React.Component {

    public render() {
        return (
            <>
                <h1>
                    You made it to the end. Maybe we should keep in touch?
                </h1>
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
            </>
        );
    }
}

export default EndForm;
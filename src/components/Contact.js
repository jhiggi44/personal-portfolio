import React, {useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import Theme from '../theme/Theme.js';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

const Container = styled.div`
    padding: 0 10vw 80px 10vw;
    font-weight: 100;
    margin: 0 auto;
    background-color: ${props => props.theme.contactBackgroundColor};
    font-family: ${props => props.theme.textFontFamily};

    & > h2 {
        font-family: ${props => props.theme.titleFontFamily};
        color: ${props => props.theme.contactTitleColor};
    }
`;

const Title = styled.h2`
    padding-top: 80px;
    margin-bottom: 80px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    color: white;
`;

const Label = styled.label`
    display: block;
    margin: 40px auto 0 auto;
    width: 100%;
    max-width: 650px;
    color: ${props => props.labelColor};
`;

const Input = styled.input`
    margin: 10px auto;
    display: block;
    width: 100%;
    max-width: 650px;
    border: none;
    background-color: transparent;
    padding: 4px;
    border-bottom: 3px solid ${props => props.borderColor};
    font-size: 22px;
    color: ${props => props.borderColor};
    
    :focus {
        padding-top: 20px;
        border-bottom: 4px solid ${props => props.activeBorderColor};
    }
`;

const MsgBox = styled.textarea`
    margin: 10px auto 0 auto;
    padding: 5px 10px;
    display: block;
    width: 100%;
    max-width: 625px;
    width: 100%;
    height: auto;
    border: none;
    border-bottom: 3px solid ${props => props.borderColor};
    background-color: transparent;
    font-size: 22px;
    color: ${props => props.borderColor};

    :focus {
        padding-top: 20px;
        border-bottom: 5px solid ${props => props.activeBorderColor};
    }
`;

const ErrMsg = styled.div`
    text-align: center;
    font-size: 22px;
    color: ${props => props.errMsgColor};
`;

const SubmitBtn = styled.button`
    display: block;
    margin: 50px auto 10px auto;
    padding: 10px 0;
    width: 100%;
    max-width: 650px;
    border: solid 3px ${props => props.submitButtonBackground};
    border-radius: 2px;
    background-color: ${props => props.submitButtonBackground};
    text-align: center;
    font-size: 22px;
    color: ${props => props.submitButtonColor};

    :active {
        background-color: ${props => props.submitButtonColor};
        color: ${props => props.submitButtonBackground};
    }
`;

function Contact() {
    let ctx = useContext(ThemeContext);
    const [theme, setTheme] = useState(new Theme(false));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isMsg, setIsMsg] = useState("");
    const [err, setErr] = useState("");

    useEffect(() => {
        setTheme(new Theme(ctx.isInSpaceMode));
    }, [ctx]);

    return (
        <Container theme={theme}>
            <Title>Contact Me</Title>
            <form>
                <Label
                    labelColor={theme.labelColor}>
                        Full Name:
                </Label>
                <Input
                    type="text"
                    borderColor = {theme.inputColor}
                    activeBorderColor = {theme.inputFocusColor}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <Label
                    labelColor={theme.labelColor}>
                        Email:
                </Label>
                <Input
                    borderColor = {theme.inputColor}
                    activeBorderColor = {theme.inputFocusColor}
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Label
                    labelColor={theme.labelColor}
                    onSelect={(e)=> {
                        e.target.style.color = "pink";
                    }}>
                        Message:
                </Label>
                <MsgBox
                    borderColor = {theme.inputColor}
                    activeBorderColor = {theme.inputFocusColor}
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                    onSelect={(e)=> {
                        if (!isMsg) {
                            e.target.value = "";
                            setIsMsg(true);
                        }
                    }}
                    defaultValue="Ask me anything..."
                />
                <SubmitBtn 
                    submitButtonBackground={theme.submitButtonBackground}
                    submitButtonColor={theme.submitButtonColor}
                    onClick={(e) => {
                        e.preventDefault();

                        if (!name) {
                            setErr("I didn't catch you're name?");
                            return;
                        }

                        if (!email || !email.includes("@")) {
                            setErr("That email looks funny!");
                            return;
                        }

                        if(!msg || !isMsg) {
                            setErr("You forgot the message!");
                            return;
                        }

                        var templateParams = {
                            name: name,
                            message: msg,
                            email: email
                        };
                        
                        emailjs.send('sirjordwritesalot_gmail_com','contact_me', templateParams, 'user_LhSPOqFKQI99ETpIc7diB')
                        .then((response) => {
                            console.log('SUCCESS!', response.status, response.text);
                            setMsg("Ask me anything...");
                            setName("");
                            setEmail("");
                            setErr("Thanks for the message! I will respond soon.");
                        }, (err) => {
                            console.log('FAILED...', err);
                            setErr(err);
                        });
                    }
                }>
                    Submit
                </SubmitBtn>
                <ErrMsg
                    errMsgColor={theme.errMsgColor}>
                        {err}
                </ErrMsg>
            </form>
        </Container>
    )
}

export default Contact;
import React, {useState} from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

const Container = styled.div`
    font-family: 'Roboto Mono', monospace;
    margin: 0 10vw;
`;

const Title = styled.h2`
    font-size: 60px;
    text-align: center;
    color: #020343;
    // color: #88918e;
    padding-top: 80px;
    margin-bottom: 80px;
`;

const Label = styled.label`
    display: block;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    margin-top: 40px;
    color: #88918e;
    color: #020343;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    max-width: 650px;
    border: none;
    border-bottom: 3px solid #020343;;
    font-size: 22px;
    font-family: 'Roboto Mono', monospace;
    margin: 10px auto;
    color: #7a7ae6;
    
    :focus {
        padding-top: 20px;
        border-bottom: 5px solid #7a7ae6;
        border-bottom: 5px solid #a1a1ff;
    }
`;

const MsgBox = styled.textarea`
    display: block;
    width: 100%;
    max-width: 625px;
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
    height: auto;
    border: none;
    border-bottom: 3px solid #020343;;
    padding: 5px 10px;
    font-family: 'Roboto Mono', monospace;
    color: #7a7ae6;
    color: #a1a1ff;

    :focus {
        padding-top: 20px;
        border-bottom: 5px solid #7a7ae6;
        border-bottom: 5px solid #a1a1ff;
    }
`;

const SubmitBtn = styled.button`
    display: block;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    margin-top: 50px;
    border: none;
    border-radius: 2px;
    background-color: #7a7ae6;
    background-color: #a1a1ff;
    text-align: center;
    font-size: 22px;
    padding: 10px 0;
    color: white;
    font-family: 'Roboto Mono', monospace;
`;

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isMsg, setIsMsg] = useState("");
    return (
        <Container>
            <Title>Contact Me</Title>
            <form>
                <Label>Your Name:</Label>
                <Input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <Label>Your Email:</Label>
                <Input
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    onClick
                />
                <Label
                    onSelect={(e)=> {
                        e.target.style.color = "pink";
                    }}
                >
                    Your Message:</Label>
                <MsgBox
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                    onSelect={(e)=> {
                        if (!isMsg) {
                            e.target.value = "";
                            setIsMsg(true);
                        }
                    }}
                >
                    Type Your Message here...
                </MsgBox>
                <SubmitBtn onClick={(e) => {
                    e.preventDefault();
                    var templateParams = {
                        name: name,
                        message: msg,
                        email: email
                    };
                     
                    emailjs.send('sirjordwritesalot_gmail_com','contact_me', templateParams, 'user_LhSPOqFKQI99ETpIc7diB')
                        .then(function(response) {
                           console.log('SUCCESS!', response.status, response.text);
                        }, function(err) {
                           console.log('FAILED...', err);
                        });
                }}>Submit</SubmitBtn>
            </form>
        </Container>
    )
}

export default Contact;
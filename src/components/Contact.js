import React, {useState} from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

const Container = styled.div`
    // margin: 0 10vw;
    padding: 0 10vw 80px 10vw;
    background-color: #BFBFBF;
    font-family: 'Roboto Mono', monospace;
`;

const Title = styled.h2`
    font-family: 'Bungee', cursive;
    padding-top: 80px;
    margin-bottom: 80px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    color: #665D5E;
`;

const Label = styled.label`
    display: block;
    margin: 40px auto 0 auto;
    width: 100%;
    max-width: 650px;
    color: #665D5E;
`;

const Input = styled.input`
    margin: 10px auto;
    display: block;
    width: 100%;
    max-width: 650px;
    border: none;
    background-color: #BFBFBF;
    border-bottom: 3px solid black;
    font-size: 22px;
    font-family: 'Roboto Mono', monospace;
    color: black;
    
    :focus {
        padding-top: 20px;
        border-bottom: 5px solid #7a7ae6;
        border-bottom: 5px solid #F0EB5B;
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
    border-bottom: 3px solid black;
    font-family: 'Roboto Mono', monospace;
    background-color: #BFBFBF;
    font-size: 22px;
    color: black;

    :focus {
        padding-top: 20px;
        border-bottom: 5px solid #7a7ae6;
        border-bottom: 5px solid #F0EB5B;
    }
`;

const SubmitBtn = styled.button`
    display: block;
    margin: 50px auto 0 auto;
    padding: 10px 0;
    width: 100%;
    max-width: 650px;
    border: none;
    border-radius: 2px;
    background-color: #F0EB5B;
    text-align: center;
    font-size: 22px;
    color: black;
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
                <Label>Full Name:</Label>
                <Input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <Label>Email:</Label>
                <Input
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Label
                    onSelect={(e)=> {
                        e.target.style.color = "pink";
                    }}
                >
                    Message:</Label>
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
                    defaultValue="Ask me anything..."
                />
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
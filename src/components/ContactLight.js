import React, {useState} from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

const Container = styled.div`
    padding: 0 10vw 80px 10vw;
    font-weight: 100;
    margin: 0 auto;
    background-color: #5c3987;
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
    color: #efd090;
`;

const Input = styled.input`
    margin: 10px auto;
    display: block;
    width: 100%;
    max-width: 650px;
    border: none;
    background-color: transparent;
    border-bottom: 3px solid white;
    font-size: 22px;
    color: white;
    
    :focus {
        padding-top: 20px;
        border-bottom: 4px solid #efd090;
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
    border-bottom: 3px solid white;
    background-color: transparent;
    font-size: 22px;
    color: #5c3d87;

    :focus {
        padding-top: 20px;
        border-bottom: 5px solid #efd090;
    }
`;

const ErrMsg = styled.div`
    text-align: center;
    font-size: 22px;
    color: white;
`;

const SubmitBtn = styled.button`
    display: block;
    margin: 50px auto 10px auto;
    padding: 10px 0;
    width: 100%;
    max-width: 650px;
    border: none;
    border-radius: 2px;
    background-color: #9f8cba;
    text-align: center;
    font-size: 22px;
    color: white;

    :active {
        background-color: #dbb98c;
    }
`;

function ContactLight() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isMsg, setIsMsg] = useState("");
    const [err, setErr] = useState("");
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
                        .then(function(response) {
                           console.log('SUCCESS!', response.status, response.text);
                           setMsg("Ask me anything...");
                           setName("");
                           setEmail("");
                           setErr("Thanks for the message! I will respond soon.")
                        }, function(err) {
                           console.log('FAILED...', err);
                           setErr(err);
                        });
                }}>Submit</SubmitBtn>
                <ErrMsg>{err}</ErrMsg>
            </form>
        </Container>
    )
}

export default ContactLight;
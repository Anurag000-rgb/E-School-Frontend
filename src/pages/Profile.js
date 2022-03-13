import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
import Header from '../components/Header';

// url('https://free4kwallpapers.com/uploads/wallpaper/gym-exercise-chest-wallpaper-1920x1080-wallpaper.jpg')


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255, 255, 255,0.5),
     rgba(255, 255, 255,0.5)) ,  url('https://bafybeiekcjbezl6bnxbg2krm623oqtfxnb7crpe7zpbyxijm5mmpsij35u.ipfs.infura-ipfs.io/')

     center;
    background-color: black;
`;

const Wrapper = styled.div`
margin: 5rem 5rem 0rem 0rem;
    width: 40%;
    padding: 3rem;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    ${mobile({ width: '65%'})};
`;


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const LogoPos = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

const LogoContainer = styled.div`
margin-top: -1rem;
width: 15vw;
height: 30vh;
${mobile({width: '40vw', height: '30vh'})}
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

const LogoText = styled.p`
    margin-top: -0.5rem;
    justify-content: center;
    text-align: center;
    font-size: 10px;
`;
const Profile = () => {
  return (
    <Container>
         <Header/>
        <Wrapper>
            <LogoPos>
                <LogoContainer>
                    <Logo src='https://mail.google.com/mail/u/0?ui=2&ik=2512c29570&attid=0.1&permmsgid=msg-f:1726989567767602312&th=17f77fdca597e488&view=fimg&realattid=17f77fd2217930b5ea11&disp=thd&attbid=ANGjdJ8vI2eK5Ucf6ZBtpkDkiIqJza1qxbcpq5GO8UztsSgCVbLoGpSa3jjXmGD2-h3BI04vLlASiO2nM29hqTVj6BHubJfQG9rgQDoXQxyKzJYHNCwiCMtwpZT3lGo&ats=2524608000000&sz=w1920-h902'/>
                </LogoContainer>
            </LogoPos>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="School Name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="Phone Number"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account, I consent to the processing of the school
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Profile;
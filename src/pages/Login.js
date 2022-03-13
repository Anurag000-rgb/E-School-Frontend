import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

//url("https://free4kwallpapers.com/uploads/originals/2015/10/09/gym-exercise-chest-wallpaper.jpg"),
//  

const Container = styled.div`
width: 100vw;
height: 100vh;
    background: linear-gradient(
     rgba(255, 255, 255,0.5),
     rgba(255, 255, 255,0.5)),
     url('https://bafybeiekcjbezl6bnxbg2krm623oqtfxnb7crpe7zpbyxijm5mmpsij35u.ipfs.infura-ipfs.io/')
    center;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Wrapper = styled.div`
    width: 20vw;
    padding:  3rem;
    margin: 5rem 5rem 0rem 0rem;

    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    ${mobile({ width: '65%'})};

`;

const Link_i = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;



const Button = styled.button`
text-align: center;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin: 15px 0px;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const LogoPos = styled.div`
justify-content: center;
align-items: center;
display: flex;
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
    margin-top: -1rem;
    justify-content: center;
    text-align: center;
    font-size: 10px;
`;
const Error = styled.span`
  color: red;
`;


const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.currentUser) || {};

  const handleClick =  (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
     history.push('/update');
    //console.log(isFetching);
    //console.log(error);
  };
  return (
    <Container>           
    <Wrapper>
        <LogoPos>
            <LogoContainer>
                <Logo src='https://mail.google.com/mail/u/0?ui=2&ik=2512c29570&attid=0.1&permmsgid=msg-f:1726989567767602312&th=17f77fdca597e488&view=fimg&realattid=17f77fd2217930b5ea11&disp=thd&attbid=ANGjdJ8vI2eK5Ucf6ZBtpkDkiIqJza1qxbcpq5GO8UztsSgCVbLoGpSa3jjXmGD2-h3BI04vLlASiO2nM29hqTVj6BHubJfQG9rgQDoXQxyKzJYHNCwiCMtwpZT3lGo&ats=2524608000000&sz=w1920-h902'/>
            </LogoContainer>
        </LogoPos>
    <Title>SIGN IN</Title>
    <Form>
        <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
        <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
        </Button>
          {error && <Error>Something went wrong...</Error>}
        <Link_i>DO NOT REMEMBER THE PASSWORD?</Link_i>
        
        <Link to='/register'>
        <Link_i>CREATE A NEW ACCOUNT</Link_i>
        </Link>
    </Form>
    </Wrapper> 
    </Container>
  )
}

//https://mail.google.com/mail/u/0?ui=2&ik=2512c29570&attid=0.1&permmsgid=msg-f:1726989567767602312&th=17f77fdca597e488&view=fimg&realattid=17f77fd2217930b5ea11&disp=thd&attbid=ANGjdJ8vI2eK5Ucf6ZBtpkDkiIqJza1qxbcpq5GO8UztsSgCVbLoGpSa3jjXmGD2-h3BI04vLlASiO2nM29hqTVj6BHubJfQG9rgQDoXQxyKzJYHNCwiCMtwpZT3lGo&ats=2524608000000&sz=w1920-h902

export default Login;
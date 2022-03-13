import React from 'react';
import styled from 'styled-components'
import { mobile } from '../Responsive';
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>EN</Language>
              </Left>
              <Center>
                  <Logo>E-स्कूल</Logo>
                  <LogoText>A Initiative From Ministry Of Education</LogoText>
              </Center>
              <Right>
                  <Link to='/profile'>
                  <MenuItem>PROFILE</MenuItem>
                  </Link>
                  <MenuItem>UPDATE PROFILE</MenuItem>
                  <Link to='/cart'>
                  <MenuItem>
                   
                  </MenuItem>
                  </Link>
              </Right>
          </Wrapper>
      </Container>
  )
};

const Container = styled.div`
    width: 100%;
    height: 60px;
    ${mobile({ height: '3rem'})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    ${mobile({ padding: "10px 0px"})};

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: 'center', flex: '2' })};
`;

const Logo = styled.h1`
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    ${mobile({ fontSize: '24px' })};
`;
const LogoText = styled.p`
    font-size: 12px;
    ${mobile({ fontSize: '10px' })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none'})};

`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    padding: 3px;
    ${mobile({ width: '50px'})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: black;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px'
     })};
`;




export default Header;

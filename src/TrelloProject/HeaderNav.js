import React from 'react'
import styled from 'styled-components'
import logo from "./img/star.png";

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <Navigation>
              <Nav>Log in</Nav>
              <Button>Sign up</Button>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Wrapper = styled.div`
width:100%;
height:100%;
display:100%;
display:flex;
justify-content: space-between;
align-item: center;
`;

const Nav = styled.div`
margin-right: 10px;
color: #0056d9;
font-weight: bold;
Transistion: all 350ms;

:hover {
    Text-decoration: underline;
    color: #006dd8;
    cursor: pointer;
    
}
`;

const Button = styled.div`
Border: 0;
outline: None;
padding: 10px;
background-color: #0056d9;
padding: 12px;
font-weight: bold;
border-radius:5px;
margin-right: 15px;



:hover {
    cursor: pointer;
    color: white;

}

`;

const Container = styled.div`
width:100%
height: 80px;
background-color: #F0EDFF;
`;

const Logo = styled.img`
width: 200px;
height: 60px;
object-fit: contain;
margin-left: -40px;
padding-top: 10px;

`;

const Navigation = styled.div`
display:flex;
align-items: center;
margin-right: 0 20px;
`;
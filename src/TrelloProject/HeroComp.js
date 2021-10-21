import React from 'react'
import styled from 'styled-components'
import img from "./img/hero.png"


const HeroComp = () => {

    return (
        <Container>
          <Wrapper>
              <Content>
<Tittle> Trello helps teams move work forward. </Tittle>
            <Desc> Collaborate, manage projects, and reach new
                 productivity peaks. From high rises to the home office,
                the way your team works is unique—accomplish it all with Trello. </Desc>
                 <InputHolder>
                 <Input placeholder="Email" />
                 <Button>Sign up-it's free!</Button>
                 </InputHolder>            
              </Content>
              <ImageHolder>
              <Image src={img} />
              </ImageHolder>
              
              </Wrapper>  
        </Container>
    )
}

export default HeroComp

const ImageHolder = styled.div`
width: 500px;
height: 600px;
`;

const Image = styled.img`
width: 460px;
height: 595px;
object-fit: cover;

`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height:90vh;
background-color: #eeebff;




`;
const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-item: center;
padding-Top: 50px;

`;

const Content= styled.div`
width: 600px;
height: 600px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 100px;

`;
const Button= styled.div`
width: 250px;
height: 35px;
Border: 0;
margin: 0 15px;
outline: None;
padding: 12px;
background-color: #0056D9;
color: white;
font-size: 18px;
font-weight: bold;
color: white;
border-radius:6px;
text-align: center;


:hover {
    
    cursor: pointer;
}
`;

const Tittle= styled.div`
font-size: 30px;
font-weight: 500;
margin-bottom: 15px;
family-font: arial;

`;

const Desc= styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 48px;
family-font: arial:

`;

const InputHolder= styled.div`
display:flex;
align-items: center;
`;

const Input = styled.input`
width: 320px;
height: 35px;
border: 1px solid gray;
border-radius: 6px;
padding: 5px;

:placeholder {
    padding: 10px;
    font-size: 18px;
}
`;


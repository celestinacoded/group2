import React from 'react'
import styled from 'styled-components'
import img from "./img/hero2.png"
import logo1 from "./img/logo4.jpeg"
import logo2 from "./img/logo5.jpeg"
import logo3 from "./img/logo2.jpeg"
import logo4 from "./img/logo3.jpeg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Tinawork = () => {
    return (
        <Container>
        <Wrapper>
            <Title> It’s more than work. It’s a way of working
                                 together. </Title>
            <Desc> Start with a Trello board, lists, and cards.
                 Customize and expand with more features as your teamwork grows. Manage projects, organize tasks,
                and build team spirit—all in one place.</Desc>
            <Button> Start doing <ArrowRightAltIcon/> </Button>
            <ImageHolder>
            <Image src={img} />
            </ImageHolder>
            <Sub> Join over 1,000,000 teams worldwide
                 that are using Trello to get more done.</Sub>
                 <Div>
            <Logo1 src={logo1}/>
            <Logo2 src={logo2}/>
            <Logo3 src={logo3}/>
            <Logo4 src={logo4}/>
            </Div>
        
        </Wrapper>  
    </Container>
    );
};

export default Tinawork

const Container = styled.div`
width: 100%;
height: 100%;
min-height:90vh;
background-colour: #FFFFFF;

`;

const Wrapper = styled.div`
width: 100%;
hight: 80vh;
padding-Top: 100px;
align-items: center;
`;
const Title = styled.div`

font-weight: bold;
font-size: 30px;
align-items: center;
padding-bottom: 10px;
display:flex;
justify-content: center;

`;

const Desc = styled.div`
font-size: 20px;
width: 900px;
padding-bottom: 25px;
align-item: center;
display: flex;
justify-content: space-around;
margin: 0 auto;

`;


const Button = styled.div`
width: 130px;
height: 35px;
border: 1px solid gray;
color: blue;
border-radius: 6px;
padding: 5px;
border-color: blue;
align-item: center;
display: flex;
justify-content: space-around;
margin: 0 auto;

.MuiSvgIcon-root{
    margin-left: 7px;
    align-items: center;
}

:hover {
    cursor: pointer;
    color: black;
    font-weight: lighter;

}
`;
const ImageHolder = styled.div`
width: 200px;
padding-top: 20px;
align-item: center;
display: flex;
justify-content: space-around;
margin: 0 auto;
`;
const Sub = styled.div`
font-size: 20px;
width: 700px;
align-item: center;
display: flex;
justify-content: space-around;
margin: 0 auto;


`;
const Image = styled.img`
width: 1000px;
height: 600px;
padding-bottom: 20px;


`;
const Logo1 = styled.img`
width: 100px;
height: 40px;
padding: 15px;



`;
const Logo2 = styled.img`
width: 200px;
object-fit: contain;
height: 60px;

`;
const Logo3 = styled.img`
width:100px;
height: 80px;


`;
const Logo4 = styled.img`
width: 90px;
height: 18px;
padding-top: 25px;


`;

const Div = styled.div`
align-item: center;
display: flex;
height: 50px;
width:60%;
justify-content: space-around;
margin: 0 auto;
`;

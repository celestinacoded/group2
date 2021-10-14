import React from 'react'
import HeaderNav from "./HeaderNav"
import HeroComp from './HeroComp'
import styled from 'styled-components'

const Trello = () => {
    return (
        <Container>
            <Wrapper>   
                <HeaderNav /> 
                <HeroComp />
            </Wrapper>
        </Container>
    )
}

export default Trello

const Wrapper = styled.div``;

const Container = styled.div``;
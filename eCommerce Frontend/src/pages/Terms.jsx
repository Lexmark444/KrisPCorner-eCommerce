import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    overflow: auto;
    background-color: whitesmoke;
    ${mobile({ height: "95vh" })}
`
const Rotate = styled.div`
    animation: loader 2.5s infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes loader {
     0% {
            rotate: 0deg;
        }
    100% {
            border-radius: 50%;
            rotate: 360deg;
        }
}
`
const Policy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    font-weight: 700;
    animation: blinkingText 3s infinite;
    @keyframes blinkingText {
    0%{     color: #ff0000;    }
    49%{    color: #0011ff; }
    60%{    color: transparent; }
    80%{    color:transparent;  }
    100%{   color: #00ff15;    }
    }

    rotate: 10turn;
    transition: 30s ease-in-out;
    ${mobile({ fontSize: "medium" })}


`
const Terms = () => {
  return (
    <div>
    <Navbar />
    <Container>
        <Rotate>
            <Policy>NO REFUNDS!</Policy>
        </Rotate>
    </Container>
    </div>

  )
}

export default Terms

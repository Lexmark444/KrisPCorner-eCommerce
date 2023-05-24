import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import clouds from '../assets/images/walkingonclouds.jpg'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
    ),
    url(${clouds});
    background-color: whitesmoke;
    ${mobile({ fontSize: "medium" })}
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
    1%{     color: teal;    }
    49%{    color: blue; }
    60%{    color: transparent; }
    80%{    color:transparent;  }
    100%{   color: yellow;    }
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

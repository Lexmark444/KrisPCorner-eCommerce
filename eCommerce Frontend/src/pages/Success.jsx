import { useNavigate, useLocation } from "react-router"
import styled from "styled-components"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import success from '../assets/images/success.jpg'
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
    ),url(${success});
  
  background-size: cover;
  background-repeat: no-repeat;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  background-color: aliceblue;
  padding: 20px 30px;
  border-radius: 3px;
`
const Title = styled.div`
  font-weight: 500;
`
const GoHome = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: teal;
  border-radius: 3px;
  width: 25%;
  margin-top: 10px;

`

const Success = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const routeHome = () =>{ 
      navigate("/");
    }

    console.log(location)
  return (
    <div>
    <Navbar />
    <Container>
      <Wrapper>
      <Title>Thank you!</Title>
      Your order was successful!
      <GoHome>
        <HomeRoundedIcon onClick={routeHome} />
      </GoHome>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Success

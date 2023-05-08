import styled from "styled-components"
import loginbackground from "../assets/images/loginbackground.jpg"
import { mobile } from "../responsive"

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  
  background-image: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
    ),
    url(${loginbackground});

  display: flex;
  align-items: center;
  justify-content: center;
 
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px 20px 15px;
  background-color: white;
  opacity: 90%;
  border-radius: 3px;
  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: teal;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Button = styled.button`
  width: 33%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: pink;
  }  
`
const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 7px 0px 0;

`
const Link = styled.a`
  text-decoration: underline;
  font-size: 12px;
  color: teal;
  cursor: pointer;

  &:hover {
    color: pink;
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>

          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
          <ButtonContainer>
            <Button>LOGIN</Button>
          </ButtonContainer>
          <LinkContainer>
            <Link>Register</Link>
            <Link>Forgot Password?</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
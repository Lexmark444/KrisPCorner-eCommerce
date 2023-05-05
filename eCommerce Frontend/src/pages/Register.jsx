import styled from "styled-components"
import registerbg from "../assets/images/registerbg.jpg"

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  
  background-image: linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
    ),
    url(${registerbg});

  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  opacity: 90%;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: teal;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"/>
          <Input placeholder="Last Name"/>
          <Input placeholder="Email"/>
          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
          <Agreement>By creating an account I consent to the processing of my personal data in accordance
            with the <b>PRIVACY POLICY</b>
          </Agreement>
          <ButtonContainer>
          <Button>SUBMIT</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

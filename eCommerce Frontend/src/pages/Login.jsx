import styled from "styled-components"
import loginbackground from "../assets/images/loginbackground.jpg"
import { mobile } from "../responsive"
import { useState } from "react"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

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
  
  &:disabled{
    cursor: not-allowed
  }
`

const Error = styled.span`
  color: red;

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
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  
  const routeRegister = () =>{ 
    navigate("/register");
  }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>

          <Input 
          placeholder="Username" 
          onChange={(e)=>setUsername(e.target.value)}
          />
          <Input 
          placeholder="Password"  
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          />
          <ButtonContainer>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Either your Username or Password is incorrect...</Error>}
          </ButtonContainer>
          <LinkContainer>
            <Link onClick={routeRegister}>Register</Link>
            <Link onClick={()=>alert("That SUCKS!")}>Forgot Password?</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
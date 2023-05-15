import styled from "styled-components"
import { Send } from '@mui/icons-material'
import { mobile } from "../responsive"
import { useState } from "react"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "15px", textAlign: "center" })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {

  const [value, setValue] = useState("");

  const onInput = (e) => setValue(e.target.value);

  const onClear = () => {
    setValue("");
    alert("You've subscribed!")
  }


  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get updated on your favorite products!</Desc>
      <InputContainer>
        <Input value={value} onInput={onInput} placeholder="Your email" />
        <Button onClick={ onClear }>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter

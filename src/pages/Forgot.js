import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import AuthService from "../services/auth.service";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1664209448379-732f0dac59bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Error = styled.span`
  color: red;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Forgot = () => {
  
  let navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Reset your password</Title>
        <Form >
          <Input 
            type="text"
            placeholder="email"
            name="email"
            value={email}         
          />
          <Button disabled={loading}>RESET PASSWORD</Button>
          {/* <Error>{ message }</Error> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Forgot;
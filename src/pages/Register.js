import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import AuthService from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
`;

const Register = () => {

  let navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmpassword = e.target.value;
    setConfirmPassword(confirmpassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('')
    setLoading(true)

    if (password !== confirmpassword) {
      setMessage('Passwords do not match');
    }

    AuthService.register(firstname, lastname, username, email, password)
      .then(response => {
        navigate("/products");
        window.location.reload();
      })
      .catch(e => {
        const resMessage =
          (e.response &&
              e.response.data &&
              e.response.data.message) ||
            e.message ||
            e.toString();

          setLoading(false);
          setMessage(resMessage);
      }) 
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
          <Input 
            type="text"
            placeholder="first name"
            name="firstname"
            value={firstname}
            onChange={onChangeFirstname} 
          />
          <Input 
            type="text"
            placeholder="last name"
            name="lastname"
            value={lastname}
            onChange={onChangeLastname} 
          />
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChangeEmail} 
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onChangePassword} 
          />
          <Input
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={onChangeConfirmPassword} 
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        { message && 
          <>
            <br/>
            <Error>{ message }</Error>
          </>          
        }
      </Wrapper>
    </Container>
  );
};

export default Register;
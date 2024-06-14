import  { useState } from 'react'
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../lib/api/auth';

 


export default function Login({ setUser }) {
    const [id, setId] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
    //이메일 입력 useState
    //패스워드 입력 useState
    // const navigate = useNavigate();

const handleLogIn = async () => {
    const {userId, nickname, avatar} = await login ({id : id, password: password})
 alert("로그인이 되었습니데")
    setUser({ userId, nickname, avatar});
 navigate("/")
};

  return (
    <Container>
<Div>
    <Title> 로그인 </Title>
    <InputGroup>
    <Label htmlFor="email"> ID </Label>
    <Input
            type="email"
            onChange={(e) => setId(e.target.value)}
            />
    </InputGroup>
    <InputGroup>
    <Label htmlFor="password"> Password </Label>
    <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
    </InputGroup>
    <LoginButton onClick={handleLogIn}>로그인</LoginButton>
    <SignupLink>
         회원 아니세여? 가입 하시겠서여? <Link to="/signup">회원가입</Link>
        </SignupLink>
    </Div>
    </Container>
  )
 }

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fcf9e6;
`;

const Div = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffc493;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ffa963;
  }
`;
const SignupLink = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;
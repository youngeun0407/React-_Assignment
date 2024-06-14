import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../lib/api/auth';


export default function Signup () {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () =>{
    if (id.length < 4 || id.length > 10){
        alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
        return;
    }
    if (password.length < 4 || password.length > 15){
        alert("패스워드는 4글자에서 15글자 이내로만 가능합니다!");
        return;
  }
  if (nickname.length < 1 || nickname.length > 10){
    alert("닉네임는 1글자에서 10글자 이내로만 가능합니다!");
    return;
  }

  const response = await register({
    id: id,
    password: password,
    nickname: nickname
  })
if (response) {
    console.log(response);
    confirm("회원가입이 완료되었습니다.")
    // window.confirm
    navigate("/login")
}
};

  return (
  
    <Container>
        <Div>
        <Title>회원가입</Title>
        <InputGroup>
        <Label htmlFor='id'>ID</Label>
        <Input
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
        />
        </InputGroup>
        <InputGroup>
        <Label htmlFor='password'>Password</Label>
        <Input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        />
        </InputGroup>
        <InputGroup>
        <Label htmlFor='nickname'>nickname</Label>
        <Input
        type='text'
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="nickname"
        />
        </InputGroup>
        <Button onClick={handleRegister}>회원가입</Button>
        <ToggleButton onClick={() => navigate("/login")}>돌아가기</ToggleButton>
        </Div>
    </Container>
  );
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

const Button = styled.button`
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
const ToggleButton = styled.button`
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
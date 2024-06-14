import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";
import { useEffect } from "react";

export default function Layout({user, setUser}) {
    const navigate = useNavigate();
    useEffect(() => {
        getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.userId,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else{
        handleLogout
      }
        });
      },[]);

const handleLogout = () =>{
    setUser(null);
navigate("/login");
localStorage.clear();
}


    return (
        <>
        <Navbar>
<NavItems>
    <NavItem to="/">HOME</NavItem>
    <NavItem to="/profile">내 프로필</NavItem>
</NavItems>
<UserProfile>
    {user && (
        <>
        <UserAvatar scr={user.avatar} alt="User Avatar" />
        <UserName>{user.nickname}</UserName>
        <LogoutButton onClick={handleLogout} >로그아웃</LogoutButton>
        </>
    )}
</UserProfile>
        </Navbar>
        <PageContaner>
        <Outlet/>
        </PageContaner>
        </>
    )
}


const Navbar = styled.nav`
    background-color: #fbdacb;
    color: black;
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: calc(100% - 2rem);
top: 0;
z-index: 1000;
max-width: 1240px;
`

const LogoutButton = styled.button`
    padding: 8px 12px;
    background-color: blanchedalmond;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover{background-color: #ffda8f}
`

const PageContaner = styled.div`
    padding: 6rem 2rem; 
`

const NavItems = styled.div`
    display: flex;
    align-items: center;
`
const NavItem = styled(Link)`
color: black;
margin: 0 10px;
text-decoration:none;

&:hover{text-decoration: underline};
`

const UserProfile = styled.div`
    display: flex;
    align-items: center;
`

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;

`
const UserName = styled.span`
    color: black;
    margin-right: 20px;
`
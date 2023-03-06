import styled from "styled-components"
import { mobile } from "../responsive"
import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material";
import { Link, Navigate, redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const logOut = () => {
  AuthService.logout();
  return redirect('/login')
};

const NavBar = () => {
  const currentUser = AuthService.getCurrentUser();

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="VIN/PART NUMBER" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        ZIMOCO.
                    </Logo>
                </Center>
                <Right>
                  { currentUser ? <>
                    <Link to="/profile"><MenuItem>PROFILE</MenuItem></Link>
                    <Link to='/'>
                      <MenuItem onClick={logOut}>SIGN OUT</MenuItem>
                    </Link>
                  </>
                     :
                    <>
                      <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
                      <Link to="/login"><MenuItem>LOGIN</MenuItem></Link>                    
                    </>
                    
                  }
                    
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar;
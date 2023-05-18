import React, { useState } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  height: 70px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 70px;
  gap: 50px;
  font-size: 18px;
  @media (max-width: 768px){
    display: block;
    flex-direction: column;
    width: 100%;
    padding: 10px 10px;
  }
`
const Nav = styled.div`
padding: 8px 20px;
border-radius: 4px;
textDecoration: none;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
  }
`
const Button = styled.div`
cursor: pointer;
`
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavContainer>
      <Button onClick={() => setShowNav(!showNav)}><MenuIcon sx={{ color: "white" }} /></Button>
      {showNav ?
        <>
          <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Home</Nav></NavLink>
          <NavLink to='/about' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>About</Nav></NavLink>
          <NavLink to='/projects' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Projects</Nav></NavLink>
        </>
        :
        <></>
      }
    </NavContainer>
  )
}

export default Navbar
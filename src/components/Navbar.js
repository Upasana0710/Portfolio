import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`
const Nav = styled.div`
padding: 8px 20px;
border-radius: 4px;
textDecoration: none;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
  }
`
const Navbar = () => {
    return (
        <NavContainer>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Home</Nav></NavLink>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>About</Nav></NavLink>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Contact</Nav></NavLink>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Work</Nav></NavLink>
        </NavContainer>
    )
}

export default Navbar
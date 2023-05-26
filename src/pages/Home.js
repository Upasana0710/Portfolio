import React,{useState, useRef} from 'react'
import { Link, Element } from 'react-scroll';
import styled from 'styled-components';
import '../index.css';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Education from '../components/Education.js';
import Welcome from '../components/Welcome'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
background: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
overflow-y: auto;
`
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
    width: 100px;
    padding: 10px 10px;
    z-index: 6;
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
const Home = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <Container>
      <NavContainer>
      <Button onClick={() => setShowNav(!showNav)}><MenuIcon sx={{ color: "white" }} /></Button>
      {showNav ?
        <>
          <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Home</Nav></NavLink>
          <Link to="target" smooth={true} duration={500} style={{ color: 'inherit', textDecoration: 'none' }}><Nav>About</Nav></Link>
          <a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Skills</Nav></a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Projects</Nav></a>
          <a href="#education" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Education</Nav></a>
        </>
        :
        <></>
      }
    </NavContainer>
    <Welcome/>
    <About id="about" />
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Education id="education" />
    </Container>
  )
}

export default Home
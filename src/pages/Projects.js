import React from 'react'
import styled from 'styled-components';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import Podstream from '../images/podstream.png';
import ChatApp from '../images/ChatApp.png';
import ObjectDetection from '../images/ObjectDetection.png';
import Yoga from '../images/Yoga.png'
import Memories from '../images/Memories.png';
import BookFinder from '../images/BookFinder.png';
import Todo from '../images/Todo.png';

const ProjectsContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: 200vh;
padding: 40px;
@media (max-width: 768px){
    padding: 40px 0px;
    height: 100%;
}
`
const Heading = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 30px;
font-weight: 500;
margin-bottom: 20px;
@media (max-width: 768px){
    text-align: center;
}
`
const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 20px 0px;
gap: 20px;
margin-bottom: 20px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Card = styled.div`
width: 350px;
height: 250px;
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 12px;
cursor: pointer;
&:hover{
    background-color: ${({ theme }) => theme.bgLight}
}
`
const ProjectName = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 24px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
`
const Upper = styled.div`
position: relative;
height: 170px;

`
const PrimaryDetails = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 4%;
left: 4%;
width: 90%;
`
const Name = styled.div`
display: flex;
justify-content: space-between;
`
const Lower = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80px;
`
const Date = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 14px;
font-weight: 600;
margin: 4px 0px;
`
const Description = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 12px;
padding: 10px;
`
const ProjectImage = styled.div`
width: 100%;
height: 170px;
border-radius: 14px 14px 0px 0px;
`
const List = styled.div`
display: flex;
flex-wrap: wrap;
height: fit-content;
`
const Item = styled.div`
border: 1px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
border-radius: 16px;
padding: 8px;
&:hover{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
}
`

const Projects = () => {
    return (
        <ProjectsContainer>
            <Heading>Projects</Heading>
            <Cards>
                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Podstream})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Podstream</ProjectName>
                                <Link to='https://podstream.netlify.com'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>March 2023 - April 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>This innovative web application is designed to provide users with a seamless and intuitive podcast streaming experience, complete with advanced search functionality and popular podcast displays.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ObjectDetection})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px', 
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>                        
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Object Detection</ProjectName>
                                <Link to='https://github.com/Upasana0710/Object-Detection'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>Jan 2022 - Feb 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>Built using MediaPipe API, this web application is designed to provide a user-friendly experience for detecting objects from both images and webcam feeds.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Yoga})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>                        
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Yoga Form</ProjectName>
                                <Link to='https://join-yoga.netlify.app/'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>Nov 2022 - Dec 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>This web application is designed to make the process of registering for yoga classes easier for both users and admin personnel.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Memories})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>  
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Memories</ProjectName>
                                <Link to='https://github.com/Upasana0710/Memories-Project'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>July 2022 - August 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>Developed using the popular MERN stack, this web application provides a centralized platform for storing and reminiscing about special moments with timestamps and pictures.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ChatApp})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>                          
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Chat App</ProjectName>
                                <Link to='https://upasana0710.github.io/React-Chat-App/'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>May 2022 - June 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>Built with ReactJS and Firebase, this web application provides a simple and user-friendly platform for chatting with friends and new acquaintances.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BookFinder})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>                          
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Book Finder</ProjectName>
                                <Link to='https://upasana0710.github.io/Book-Finder/'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>April 2022 - May 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>Search, find books and see price details. Used Google Books API and Axios for fetching data of different books.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Todo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px 12px 0px 0px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>                          
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>To-Do List</ProjectName>
                                <Link to='https://upasana0710.github.io/Todo-List-App/'><LinkIcon sx={{ color: "#7d3a70" }} /></Link>
                            </Name>
                            <Date>March 2022 - April 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Description>We can add todo tasks that are to be done. Edit, Delete, New Todo functionality are present. Used Local Storage for storing Todo Data.</Description>
                    </Lower>
                </Card>
            </Cards>
            <Heading>Skills</Heading>
            <List>
                <Item>HTML</Item>
            </List>
        </ProjectsContainer>
    )
}

export default Projects
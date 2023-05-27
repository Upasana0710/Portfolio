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
height: fit-content;
padding: 100px 0px;
justify-content: center;
@media (max-width: 768px){
    padding: 80px 0px;
    height: 450vh;
}
`
const Heading = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 30px;
font-weight: 500;
margin-bottom: 20px;
text-align: center;
@media (max-width: 768px){
    text-align: center;
}
`
const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 20px 0px;
gap: 24px;
margin-bottom: 20px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Card = styled.div`
width: 300px;
height: 360px;
border: solid #2778cf;
border-width: 4px 0px 0px 0px;
border-radius: 8px;
padding: 14px;
background-color: ${({ theme }) => theme.bgLight};
&:hover{
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
}
`
const ProjectName = styled.div`
color: ${({ theme }) => theme.text_secondary};
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
justify-content: flex-start;
height: 180px;
`
const Date = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
font-weight: 600;
margin: 4px 0px;
`
const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
width: 100%;
padding: 20px 0px 18px 0px;
`
const Tag = styled.div`
padding: 6px;
border-radius: 10px;
background-color: #99b4d1;
font-size: 14px;
color: ${({ theme }) => theme.bgLight};
`
const Description = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
`
const ProjectImage = styled.div`
width: 100%;
height: 170px;
border-radius: 14px 14px 14px 14px;
`

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <Heading>Projects</Heading>
            <Cards>
                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Podstream})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Podstream</ProjectName>
                                <Link to='https://podstream.netlify.com'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>March 2023 - April 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Podcast</Tag>
                            <Tag>MERN</Tag>
                            <Tag>Teamwork</Tag>
                        </Tags>
                        <Description>This innovative web application is designed to provide users with a seamless and intuitive podcast streaming experience, complete with advanced search functionality and popular podcast displays.This project serves as a testament to my proficiency in ReactJs, Node Js, and MongoDB.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ObjectDetection})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px', 
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage> 
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Object Detection</ProjectName>
                                <Link to='https://github.com/Upasana0710/Object-Detection'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Jan 2023 - Feb 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Mediapipe</Tag>
                            <Tag>Artificial Intelligence</Tag>
                        </Tags>
                        <Description>Built with ReactJS, this web application is designed to provide a seamless and user-friendly experience for detecting objects from both images and webcam feeds. To achieve this functionality, I utilised the Mediapipe API.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Yoga})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage> 
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Yoga Form</ProjectName>
                                <Link to='https://join-yoga.netlify.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Nov 2022 - Dec 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Health</Tag>
                            <Tag>Yoga</Tag>
                            <Tag>Get Registered</Tag>
                        </Tags>
                        <Description>This web application is designed to make the process of registering for yoga classes easier for both users and admin personnel. The backend of the app uses MySQL to store user, batch, and payment data, which enables admins to manage batch scheduling and payment details with ease.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Memories})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>  
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Memories</ProjectName>
                                <Link to='https://github.com/Upasana0710/Memories-Project'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>July 2022 - August 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Memento</Tag>
                            <Tag>Timestamp</Tag>
                            <Tag>Loved</Tag>
                        </Tags>
                        <Description>Developed using the popular MERN stack, this web application provides a centralized platform for storing and reminiscing about special moments with timestamps, brief notes, and pictures. The app also features a "Like" functionality to let users express their fondness for their most beloved memories.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ChatApp})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>   
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Chat App</ProjectName>
                                <Link to='https://upasana0710.github.io/React-Chat-App/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>May 2022 - June 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Connect</Tag>
                            <Tag>Fun</Tag>
                        </Tags>
                        <Description>Built with ReactJS and Firebase, this web application provides a simple and user-friendly platform for chatting with friends and new acquaintances. Using Firestore Database for the chats collection, users can easily send and receive messages in real-time.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BookFinder})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>    
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Book Finder</ProjectName>
                                <Link to='https://upasana0710.github.io/Book-Finder/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>April 2022 - May 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>BookWorm</Tag>
                            <Tag>e-book</Tag>
                            <Tag>API</Tag>
                        </Tags>
                        <Description>Search and find the desired book and see price details. Used React Js for the Web App. Used Google Books API and Axios for fetching data of different books. It's a web app in which we can search books, see the prices and buy the e-book from Google books.</Description>
                    </Lower>
                </Card>
                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Todo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>  
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>To-Do List</ProjectName>
                                <Link to='https://upasana0710.github.io/Todo-List-App/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>March 2022 - April 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Work</Tag>
                            <Tag>To Do</Tag>
                            <Tag>Local Storage</Tag>
                        </Tags>
                        <Description>Used Local Storage for storing Todo Data. Used React Js for the Web App. Edit, Delete, New Todo functionality are present. We can add todo tasks that are to be done, all data are store in browser's local storage and so the data remains safe if we close the browser.</Description>
                    </Lower>
                </Card>
                        
            </Cards>
        </ProjectsContainer>
    )
}

export default Projects
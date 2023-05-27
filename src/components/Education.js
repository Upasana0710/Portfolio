import React from 'react'
import styled from 'styled-components';

const EducationContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: 60vh;
@media (max-width: 768px){
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const CardsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 20px 40px;
gap: 24px;
margin-bottom: 20px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
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
const Card = styled.div`
background: ${({ theme }) => theme.bgLight};
width: 250px;
height: fit-content;
border-radius: 8px;
border: solid #2778cf;
border-width: 4px 0px 0px 0px;
padding: 20px;
&:hover{
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
}
`
const Study = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 18px;
font-weight: 500;
padding: 8px 0px;
`
const Institution = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
padding-top: 10px
`
const Duration = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
padding: 2px 0px;
`
const Marks = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 14px;
padding: 8px 0px;
`
const Education = () => {
  return (
    <EducationContainer>
        <Heading>Education</Heading>
        <CardsContainer>
            <Card>
                <Study>BTech in CSE</Study>
                <Institution>Kalinga Institute of Industrial Technology</Institution>
                <Duration>September 2021 - September 2025</Duration>
                <Marks>CGPA - 9.5</Marks>
            </Card>
            <Card>
                <Study>Class 12 CBSE</Study>
                <Institution>Sushila Birla Girls' School</Institution>
                <Duration>March 2019 - March 2021</Duration>
                <Marks>Percentage - 96.8%</Marks>
            </Card>
            <Card>
                <Study>Class 10 ICSE</Study>
                <Institution>Modern High School For Girls</Institution>
                <Duration>March 2019 - March 2017</Duration>
                <Marks>Percentage - 96%</Marks>
            </Card>
        </CardsContainer>
    </EducationContainer>
  )
}

export default Education
import React from 'react'
import styled from 'styled-components'
import { skills } from './Data/Constant'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-bottom: 4rem;
@media (max-width: 960px) {
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  margin-bottom: 0rem;
  
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
max-width: 1350px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
export const Title = styled.div`
color: #149bf5;
font-size: 3rem;
text-align: left;
font-weight: 700;
margin-top: 20px;
border-bottom: 3px solid #149bf5;
 

  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
      text-align: center;
      border-bottom: none;
      text-decoration: underline;
  }
`;

export const Desc = styled.div`
    color: white;
    font-size: 18px;
    max-width: 800px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  margin-bottom: 5rem;

`

const Skill = styled.div`
  width: 100%;
  max-width: 1500px;
  border: 1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  background:#111827;
  &:hover {
    box-shadow: 5px 5px 5px 5px #854CE6; /* Change background color on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>SKILLS</Title>
      
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
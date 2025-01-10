import { StyledUl, StyledLi } from "./styled";
import {  skillsData } from "./skillsData";

const Skillset = () => {
  return (
    <StyledUl>
      {skillsData.map((skill) => (
        <StyledLi key={skill}>{skill}</StyledLi>
      ))}
    </StyledUl>
  );
};

export default Skillset;

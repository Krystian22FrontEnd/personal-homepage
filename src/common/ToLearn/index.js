import {
  Wrapper,
  StyledUl,
  StyledLi,
} from "../Skillset/styled";

const ToLearn = () => {
  return (
    <Wrapper>
      <StyledUl>
        <Wrapper>
          <StyledLi>React Context</StyledLi>
          <StyledLi>Node.js</StyledLi>
        </Wrapper>
        <Wrapper>
          <StyledLi>Cypres</StyledLi>
          <StyledLi>Unit Testing</StyledLi>
        </Wrapper>
        <Wrapper>
          <StyledLi>TypeScript</StyledLi>
          <StyledLi>JS classes</StyledLi>
        </Wrapper>
      </StyledUl>
    </Wrapper>
  );
};

export default ToLearn;

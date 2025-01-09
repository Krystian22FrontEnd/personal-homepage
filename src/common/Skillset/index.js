import { Wrapper, StyledUl, StyledLi } from "./styled";
import {skills} from "./skills"

const Skillset = () => {
  const ehSkills = skills.map(({skill}) => skill)
  return (
    <Wrapper>
      <StyledUl>
        <Wrapper>
          <StyledLi>{ehSkills}</StyledLi>
          {/* <StyledLi>Responsive Web Design</StyledLi>
          <StyledLi>Teamwork</StyledLi>
          <StyledLi>Markdown</StyledLi>
          <StyledLi>Immutability</StyledLi>
          <StyledLi>CSS BEM convention</StyledLi>
          <StyledLi>CSS Grid</StyledLi>
          <StyledLi>CSS Flexbox</StyledLi>
        </Wrapper>
        <Wrapper>
          <StyledLi>React Router</StyledLi>
          <StyledLi>Redux-Saga</StyledLi>
          <StyledLi>Redux (Toolkit)</StyledLi>
          <StyledLi>React Hooks</StyledLi>
          <StyledLi>Error handling</StyledLi>
          <StyledLi>Working with API (fetch, axios)</StyledLi>
          <StyledLi>JavaScript: ES6+</StyledLi>
        </Wrapper>
        <Wrapper>
          <StyledLi>Promises, Async/Await</StyledLi>
          <StyledLi>GitHub Pull Requests & Review</StyledLi>
          <StyledLi>Trello</StyledLi>
          <StyledLi>Scrum</StyledLi>
          <StyledLi>NPM</StyledLi>
          <StyledLi>React</StyledLi>
          <StyledLi>Git</StyledLi> */}
        </Wrapper>
      </StyledUl>
    </Wrapper>
  );
};

export default Skillset;

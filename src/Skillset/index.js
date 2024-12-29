import { SkillsetWrapper, SkillsetUl, SkillsetStyledLi } from "./styled";

const Skillset = () => {
  return (
    <SkillsetWrapper>
      <SkillsetUl>
        <SkillsetWrapper>
          <SkillsetStyledLi>Semantic & accessible HTML</SkillsetStyledLi>
          <SkillsetStyledLi>Responsive Web Design</SkillsetStyledLi>
          <SkillsetStyledLi>Teamwork</SkillsetStyledLi>
          <SkillsetStyledLi>Markdown</SkillsetStyledLi>
          <SkillsetStyledLi>Immutability</SkillsetStyledLi>
          <SkillsetStyledLi>CSS BEM convention</SkillsetStyledLi>
          <SkillsetStyledLi>CSS Grid</SkillsetStyledLi>
          <SkillsetStyledLi>CSS Flexbox</SkillsetStyledLi>
        </SkillsetWrapper>
        <SkillsetWrapper>
          <SkillsetStyledLi>React Router</SkillsetStyledLi>
          <SkillsetStyledLi>Redux-Saga</SkillsetStyledLi>
          <SkillsetStyledLi>Redux (Toolkit)</SkillsetStyledLi>
          <SkillsetStyledLi>React Hooks</SkillsetStyledLi>
          <SkillsetStyledLi>Error handling</SkillsetStyledLi>
          <SkillsetStyledLi>Working with API (fetch, axios)</SkillsetStyledLi>
          <SkillsetStyledLi>JavaScript: ES6+</SkillsetStyledLi>
        </SkillsetWrapper>
        <SkillsetWrapper>
          <SkillsetStyledLi>Promises, Async/Await</SkillsetStyledLi>
          <SkillsetStyledLi>GitHub Pull Requests & Review</SkillsetStyledLi>
          <SkillsetStyledLi>Trello</SkillsetStyledLi>
          <SkillsetStyledLi>Scrum</SkillsetStyledLi>
          <SkillsetStyledLi>NPM</SkillsetStyledLi>
          <SkillsetStyledLi>React</SkillsetStyledLi>
          <SkillsetStyledLi>Git</SkillsetStyledLi>
        </SkillsetWrapper>
      </SkillsetUl>
    </SkillsetWrapper>
  );
};

export default Skillset;

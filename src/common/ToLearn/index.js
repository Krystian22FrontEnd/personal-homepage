import { Wrapper, StyledUl, StyledLi } from "../Skillset/styled";

import { toLearn } from "../Skillset/skillsData";

const ToLearn = () => {
  return (
    <Wrapper>
      <StyledUl>
        {toLearn.map((learn) => (
          <StyledLi key={learn}>{learn}</StyledLi>
        ))}
      </StyledUl>
    </Wrapper>
  );
};

export default ToLearn;

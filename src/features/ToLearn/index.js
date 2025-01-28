import { Wrapper, List, ListItem } from "../Skillset/styled";

import { toLearn } from "../Skillset/skillsData";

const ToLearn = () => {
  return (
    <Wrapper>
      <List>
        {toLearn.map((learn) => (
          <ListItem key={learn}>{learn}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default ToLearn;

import { Wrapper } from "./styled";

const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {body}
    </Wrapper>
  );
};

export default Section;

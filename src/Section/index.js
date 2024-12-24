import { Wrapper } from "./styled";
import {FlexContainer} from "../Container/index"

const Section = ({ title, body }) => {
  return (
    <FlexContainer>
    <Wrapper>
      <h3>{title}</h3>
      {body}
    </Wrapper>
    </FlexContainer>
  );
};

export default Section;

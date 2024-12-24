import { Wrapper } from "./styled";
import {FlexContainer} from "../Container/index"

const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {body}
    </Wrapper>
  );
};

export default Section;

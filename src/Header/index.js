import { Wrapper, Image, ColumnWrapper } from "./styled";
import {FlexContainer} from "../Container/index"
import poster from "../images/poster.png";

const Header = ({ children }) => {
  return (
    <FlexContainer>
      <Wrapper>
        {children}
        <Image src={poster} alt="poster" />
        <ColumnWrapper>
          <p>
            <b>This is</b>
          </p>
          <h1>Krystian Krupiński</h1>
          <p>lorem ios</p>
          <button>Hire me</button>
        </ColumnWrapper>
      </Wrapper>
    </FlexContainer>
  );
};

export default Header;

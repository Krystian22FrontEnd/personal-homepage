import { Container } from "./Container";
import Header from "./Header";
import Section from "./Section";
import Skillset from "./Skillset";
import ToLearn from "./ToLearn";
import poster from "./images/poster.png";

function App() {
  return (
    <Container>
      <Header
        img={<img src={poster} alt="" />}
        alt=""
        name={"Krystian Krupiński"}
        aboutMe={
          <>
            blacj aoskdka osasokd <br /> wajjkasjas
          </>
        }
      />
      <Section title={"My skillset includes"} body={<Skillset />} />
      <Section title={"What i want to learn next"} body={<ToLearn />} />
    </Container>
  );
}

export default App;

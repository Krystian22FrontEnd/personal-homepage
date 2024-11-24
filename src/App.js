import { Container } from "./Container";
import Header from "./Header";
import Section from "./Section";

function App() {
  return (
    <Container>
      <Header
        name={"Krystian Krupiński"}
        aboutMe={
          <>
            blacj aoskdka osasokd <br /> wajjkasjas
          </>
        }
      />
      <Section />
    </Container>
  );
}

export default App;

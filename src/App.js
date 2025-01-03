import { Container } from "./Container";
import Header from "./Header";
import Section from "./Section";
import Skillset from "./Skillset";
import ToLearn from "./ToLearn";
import PortfolioSection from "./PorfolioSection";

function App() {
  return (
    <Container>
      <Header />
      <Section title={"My skillset includes 🛠️"} body={<Skillset />} />
      <Section title={"What i want to learn next 🚀"} body={<ToLearn />} />
      <PortfolioSection />
    </Container>
  );
}

export default App;

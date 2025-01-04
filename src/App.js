import { Container } from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import Skillset from "./common/Skillset";
import ToLearn from "./common/ToLearn";
import PortfolioSection from "./common/PorfolioSection";
import Footer from "./common/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Section title={"My skillset includes 🛠️"} body={<Skillset />} />
      <Section title={"What i want to learn next 🚀"} body={<ToLearn />} />
      <PortfolioSection />
      <Footer />
    </Container>
  );
}

export default App;

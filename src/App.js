import { Container } from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import Skillset from "./common/Skillset";
import ToLearn from "./common/ToLearn";
import PortfolioSection from "./common/PorfolioSection";
import Footer from "./common/Footer";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState("light")
  const themeToggler = () => {
    isDark === "light" ? setIsDark('dark') : setIsDark('light')
  }

  return (
    <ThemeProvider theme={isDark === "light" ?  darkTheme : lightTheme}>
    <Container>
      <Header/>
      <Section title={"My skillset includes 🛠️"} body={<Skillset />} />
      <Section title={"What i want to learn next 🚀"} body={<ToLearn />} />
      <PortfolioSection />
      <Footer />
    </Container>
    </ThemeProvider>
  );
}

export default App;

import { Container } from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import Skillset from "./common/Skillset";
import ToLearn from "./common/ToLearn";
import PortfolioSection from "./common/PorfolioSection";
import Footer from "./common/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const themeToggler = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header onToggleTheme={themeToggler} isDark={isDark} />
        <Section title={"My skillset includes 🛠️"} body={<Skillset />} />
        <Section title={"What I want to learn next 🚀"} body={<ToLearn />} />
        <PortfolioSection />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

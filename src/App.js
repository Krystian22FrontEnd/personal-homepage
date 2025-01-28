import { Container } from "./common/Container";
import Header from "./features/Header";
import Section from "./common/Section";
import Skillset from "./features/Skillset";
import ToLearn from "./features/ToLearn";
import PortfolioSection from "./features/PorfolioSection";
import Footer from "./features/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { SwitchTheme } from "./features/Header/SwitchTheme";

function App() {
  const [isDark, setIsDark] = useState(false);

  const themeToggler = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header themeButton = {<SwitchTheme onToggleTheme={themeToggler} isDark={isDark}/> } />
        <Section title={"My skillset includes 🛠️"} body={<Skillset />} />
        <Section title={"What I want to learn next 🚀"} body={<ToLearn />} />
        <PortfolioSection />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

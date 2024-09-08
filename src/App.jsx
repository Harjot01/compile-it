import Landing from "./components/Landing";
import { LanguageProvider } from "./context/LanguageContext";
import { OutputProvider } from "./context/OutputContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <OutputProvider>
        <LanguageProvider>
          <ThemeProvider>
            <Landing />
          </ThemeProvider>
        </LanguageProvider>
      </OutputProvider>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.style.ts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/light-theme";
import { darkTheme } from "./theme/dark-theme";
import { GlobalStyles } from "./App.style";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages";
import { Navbar } from "./components";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? darkTheme : lightTheme));
        },
      }}
    >
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.style.ts";
import Button from "./components/button/Button";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/light-theme";
import { darkTheme } from "./theme/dark-theme";
import { GlobalStyles } from "./App.style";
import FilterStatus from "./components/filter/filter-status/FilterStatus";

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
      <div className="App">
        <Button type="secondary" className="btn--default">
          Add
        </Button>
        <FilterStatus />
      </div>
    </ThemeProvider>
  );
}

export default App;

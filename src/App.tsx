import React, { useState } from "react";
import "./App.style.ts";
import Button from "./components/button/Button";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/light-theme";
import { darkTheme } from "./theme/dark-theme";
import { GlobalStyles } from "./App.style";
import FilterStatus from "./components/filter/filter-status/FilterStatus";
import Loader from "./components/loader/Loader";
import { useSelector } from "./hooks/useTypedSelector";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { allInvoices } = useSelector((state) => state.invoices);

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
        {console.log(allInvoices)}
        <Button type="secondary" className="btn--default">
          Add
        </Button>
        <FilterStatus />
        <Loader />
      </div>
    </ThemeProvider>
  );
}

export default App;

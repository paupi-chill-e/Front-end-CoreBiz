import React, { createContext, useState } from "react";
import Header from "./Components/Header/header";
import Banner from "./Components/Banner/banner";
import Carousell from "./Components/Carousell/carousell";
import Footer from "./Components/Footer/footer";

export const CounterContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterContext.Provider
        value={{
          count: [count, setCount],
        }}
      >
        <Header />
        <Banner />
        <Carousell />
        <Footer />
      </CounterContext.Provider>
    </div>
  );
}

export default App;

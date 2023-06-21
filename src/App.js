import { GlobalStyle } from "./styles/Global.style";
import Quote from "./sections/Quote";
import Hero from "./sections/Hero";
import PhoneModel from "./sections/PhoneModel";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <Hero />
    </div>
  );
}

export default App;

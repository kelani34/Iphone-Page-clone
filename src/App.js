import { GlobalStyle } from "./styles/Global.style";
import Quote from "./sections/Quote";
import Hero from "./sections/Hero";
import PhoneModel from "./sections/PhoneModel";
import Design from "./sections/Design";
import Display from "./sections/Display";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <Hero />
      <Design />
      <Display />
    </div>
  );
}

export default App;

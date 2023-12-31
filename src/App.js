import { GlobalStyle } from "./styles/Global.style";
import Quote from "./sections/Quote";
import Hero from "./sections/Hero";
import PhoneModel from "./sections/PhoneModel";
import Design from "./sections/Design";
import Display from "./sections/Display";
import Processor from "./sections/Processor";
import Battery from "./sections/Battery";
import Color from "./sections/Color";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <Hero />
      <Design />
      <Display />
      <Processor />
      <Battery />
      <Color />
    </div>
  );
}

export default App;

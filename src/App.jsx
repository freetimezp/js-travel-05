import { Navbar, Hero, Memory, Explore, Footer } from './components';
import { hero, navlinks, memory, placesAPI } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore placesAPI={placesAPI} title="Explore The Beauty Of The World" />
      <Footer />
    </>
  );
};

export default App;

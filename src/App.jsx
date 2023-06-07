import { Navbar, Hero, Memory, Explore, Advertise, Footer } from './components';
import { hero, navlinks, memory, placesAPI, brands } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore placesAPI={placesAPI} title="Explore The Beauty Of The World" />
      <Advertise brands={brands} />
      <Footer />
    </>
  );
};

export default App;

import { Navbar, Hero, Memory, Footer } from './components';
import { hero, navlinks, memory } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Footer />
    </>
  );
};

export default App;

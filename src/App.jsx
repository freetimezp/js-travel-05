import { Navbar, Hero, Memory, Explore, Advertise, Pricings, Banner, Footer } from './components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore placesAPI={placesAPI} title="Explore The Beauty Of The World" />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;

import Header from "../components/header-component";
import HeroSection from "../components/hero-section.component";
import Categories from "../components/categories.component";
import Campaigns from "../components/campaigns-component";
import Favorites from "../components/favorites.component";
import MobileApp from "../components/mobile-app.component";
import Cards from "../components/cards.component";
import Footer from "../components/footer.component";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;

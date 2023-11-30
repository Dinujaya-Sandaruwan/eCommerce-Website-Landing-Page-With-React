import FooterHelp from "./components/FooterHelp";
import FooterMenu from "./components/FooterMenu";
import FooterText from "./components/FooterText";
import HeaderContent from "./components/HeaderContent";
import ImageGrid from "./components/ImageGrid";
import Inspiration from "./components/Inspiration";
import Logo from "./components/Logo";
import MainMenu from "./components/MainMenu";
import NavIcons from "./components/NavIcons";
import NewsLetter from "./components/NewsLetter";
import ProductCard from "./components/ProductCard";
import RangeProduct from "./components/RangeProduct";

import data from "./data/products";

function App() {
  return (
    <>
      <nav className="mainNav">
        <Logo />
        <MainMenu />
        <NavIcons />
      </nav>
      <header className="mainHeader">
        <HeaderContent />
      </header>

      <article className="browseRange">
        <div className="browseTitle">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <RangeProduct />
      </article>
      <article className="ourProducts">
        <div className="productTitle">
          <h2>Our Products</h2>
        </div>

        <div className="productCards">
          {data.map((card, index) => (
            <ProductCard
              key={index}
              image={card.image}
              conditionPercentage={card.condition}
              title={card.title}
              catchPrace={card.catchPrace}
              discountPrice={card.discountPrice}
              originalPrice={card.originalPrice}
            />
          ))}
        </div>
        <div className="showMore">
          <button>Show More</button>
        </div>
      </article>

      <article className="inspiration">
        <Inspiration />
      </article>

      <article className="funiroFurniture">
        <div className="title">
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>
        </div>

        <ImageGrid />
      </article>

      <footer>
        <hr className="footerTop" />
        <div className="footerContent">
          <FooterText />
          <FooterMenu />
          <FooterHelp />
          <NewsLetter />
        </div>

        <hr className="footerBottum" />
        <div className="copyright">2023 furino. All rights reverved</div>
      </footer>
    </>
  );
}

export default App;

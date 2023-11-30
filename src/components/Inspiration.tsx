import { FaAngleRight } from "react-icons/fa6";
import insImg01 from "../assets/Rectangle 25.png";
import insImg02 from "../assets/Rectangle 26.png";

const Inspiration = () => {
  return (
    <div className="inspiration-content">
      <div className="inspiration-titles ins-items">
        <h2>
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className="inspiration-middle ins-items">
        <div className="content">
          <p>01 -- Bed Room</p>
          <h2>Inner Peace</h2>
        </div>
      </div>
      <div className="inspiration-slider ins-items">
        <button className="rightBtn">
          <FaAngleRight />
        </button>

        <img src={insImg01} alt="" />
        <img src={insImg02} alt="" />

        <div className="buttons">
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;

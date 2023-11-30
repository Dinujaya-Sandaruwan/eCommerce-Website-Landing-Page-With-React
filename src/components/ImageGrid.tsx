import img01 from "../assets/imageGrid/Rectangle 36.png";
import img02 from "../assets/imageGrid/Rectangle 38.png";
import img03 from "../assets/imageGrid/Rectangle 37.png";
import img04 from "../assets/imageGrid/Rectangle 39.png";
import img05 from "../assets/imageGrid/Rectangle 40.png";
import img06 from "../assets/imageGrid/Rectangle 43.png";
import img07 from "../assets/imageGrid/Rectangle 45.png";
import img08 from "../assets/imageGrid/Rectangle 41.png";
import img09 from "../assets/imageGrid/Rectangle 44.png";

const ImageGrid = () => {
  return (
    <div className="imageGrid">
      <div className="grid01">
        <img src={img01} className="img01" alt="" />
        <img src={img02} className="img02" alt="" />
      </div>
      <div className="grid02">
        <img src={img03} className="img03" alt="" />
        <img src={img04} className="img04" alt="" />
      </div>
      <div className="grid03">
        <img src={img05} className="img05" alt="" />
      </div>
      <div className="grid04">
        <img src={img06} className="img06" alt="" />
        <img src={img07} className="img07" alt="" />
      </div>
      <div className="grid05">
        <img src={img08} className="img08" alt="" />
        <img src={img09} className="img09" alt="" />
      </div>
    </div>
  );
};

export default ImageGrid;

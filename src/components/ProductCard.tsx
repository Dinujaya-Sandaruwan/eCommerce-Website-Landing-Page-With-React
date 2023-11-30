import { BiShareAlt, BiTransfer, BiHeart } from "react-icons/bi";

interface Props {
  image: string;
  conditionPercentage: number | string;
  title: string;
  catchPrace: string;
  discountPrice: string;
  originalPrice: string;
}

const ProductCard = ({
  image,
  conditionPercentage,
  title,
  catchPrace,
  discountPrice,
  originalPrice,
}: Props) => {
  return (
    <div className="product-card">
      <img src={image} alt="" />
      {conditionPercentage == "new" ? (
        <span className="new">New</span>
      ) : (
        <span className="discount">-{conditionPercentage}%</span>
      )}

      <div className="card-details">
        <h2>{title}</h2>
        <p>{catchPrace}</p>
        <div className="price">
          <h3>{discountPrice}</h3>
          <p className="original-price">{originalPrice}</p>
        </div>
      </div>

      <div className="product-card-hover">
        <div className="content">
          <button>Add to Cart</button>
          <div className="buttons">
            <span>
              <BiShareAlt /> Share
            </span>
            <span>
              <BiTransfer /> Compare
            </span>
            <span>
              <BiHeart /> Like
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

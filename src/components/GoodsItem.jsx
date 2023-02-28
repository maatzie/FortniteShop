import { ShopContext } from "../context";
import { useContext} from 'react';

function GoodsItem(props) {
    const {
        offerId: id,
        displayName: name,
        displayDescription: description,
        price: {regularPrice: price},
        displayAssets: [{full_background}, ],
    } = props;

    const {addToBasket} = useContext(ShopContext);

    return <div className="card" id={id}>
    <div className="card-image">
      <img src={full_background} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
        <button className="btn deep-purple darken-3"  onClick={() =>
          addToBasket({
              id,
              name,
              price,
          })
      }>Buy</button>
        <span className="right price">{price}V</span>
    </div>
  </div>
}

export {GoodsItem};
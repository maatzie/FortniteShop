function GoodsItem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price,
        displayAssets: [{full_background}, ],
        addToBasket,
    } = props;

    return <div className="card" id={offerId}>
    <div className="card-image">
      <img src={full_background} alt={displayName}/>
    </div>
    <div className="card-content">
      <span className="card-title">{displayName}</span>
      <p>{displayDescription}</p>
    </div>
    <div className="card-action">
        <button className="btn deep-purple darken-3"  onClick={() =>
          addToBasket({
              offerId,
              displayName,
              price,
          })
      }>Buy</button>
        <span className="right price">{price.regularPrice}V</span>
    </div>
  </div>
}

export {GoodsItem};
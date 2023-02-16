function GoodsItem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price,
        displayAssets: [{full_background}, ],
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
        <button className="btn">Buy</button>
        <span className="right price">{price.regularPrice}$</span>
    </div>
  </div>
}

export {GoodsItem};
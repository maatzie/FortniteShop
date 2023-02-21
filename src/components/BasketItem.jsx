 function BasketItem(props) {
    const {
        offerId,
        displayName,
        price, 
        quantity,
        removeFromBasket, 
    } = props;
    
    return <li className="collection-item">
        <span className="right deep-purple-text darken-3 basket-delete" onClick={() => {removeFromBasket(offerId)}}>
            <i className="material-icons">close</i>
        </span>
        <div><strong>{displayName}</strong><br/>{price.regularPrice}V x{quantity}</div>
          
    </li>;
 }

 export {BasketItem};
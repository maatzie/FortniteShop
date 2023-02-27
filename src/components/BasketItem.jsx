 function BasketItem(props) {
    const {
        id,
        name,
        price, 
        quantity,
        removeFromBasket = Function.prototype, 
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return <li className="collection-item">
        <span className="right deep-purple-text darken-3 basket-delete pointer" onClick={() => {removeFromBasket(id)}}>
            <i className="material-icons">delete</i>
        </span>
        <div>
            <span className="right deep-purple-text darken-3 pointer" onClick={() => {incQuantity(id)}}>
                <i className="material-icons">add_circle_outline</i>
            </span>
            <span className="right basket_quantity"><strong>{quantity}</strong></span>
            <span className="right deep-purple-text darken-3 pointer" onClick={() => {decQuantity(id)}}>
                <i className="material-icons">remove_circle_outline</i>
            </span>
        </div>
        <div><strong>{name}</strong><br/>{price}V x{quantity}</div>
          
    </li>;
 }

 export {BasketItem};
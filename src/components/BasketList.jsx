import { BasketItem } from "./BasketItem";

function BasketList(props)  {
    const {
        order = [], 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return  <ul className="collection with-header basket-list">
    <li className="collection-header deep-purple darken-3 white-text"><h5>Basket</h5></li>
        {
            order.length ? order.map(item => {
                
                return <BasketItem key = {item.id} {...item} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}/>
            }) : <li className="collection-item">Empty</li>
        }
    <li className="collection-item">
    <a className="waves-effect waves-light btn deep-purple darken-3 white-text">buy</a>
    <span className="right">Total: <strong>{totalPrice}V</strong></span>
    </li>
  </ul>
}

export {BasketList};
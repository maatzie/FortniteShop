import { BasketItem } from "./BasketItem";

function BasketList(props)  {
    const {order = []} = props;
    return  <ul className="collection with-header basket-list">
    <li className="collection-header deep-purple darken-3 white-text"><h5>Basket</h5></li>
        {
            order.length ? order.map(item => {
                console.log("i");
                return <BasketItem key = {item.offerId} {...item}/>
            }) : <li className="collection-item">Empty</li>
        }
    <li className="collection-item">
    <a className="waves-effect waves-light btn deep-purple darken-3 white-text">buy</a>
    <span className="right">Total: <strong>{300}</strong></span>
    </li>
  </ul>
}

export {BasketList};
import {GoodsItem} from './GoodsItem'; 

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    return !goods.length ? <h3>Nothing here</h3> : 
    <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.offerId} addToBasket={addToBasket} {...item}/>
        ))}
    </div>
}

export {GoodsList};
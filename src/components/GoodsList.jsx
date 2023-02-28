import {GoodsItem} from './GoodsItem'; 
import { ShopContext } from '../context';
import { useContext } from 'react';

function GoodsList() {
    const {goods = []} = useContext(ShopContext);

    return !goods.length ? <h3>Nothing here</h3> : 
    <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.offerId} {...item}/>
        ))}
    </div>
}

export {GoodsList};
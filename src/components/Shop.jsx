import {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";

function Shop () {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    const addToBasket = (item) => {
        let itemIndex = order.findIndex(p => p.offerId === item.offerId);
        
        if(itemIndex < 0) {
            setOrder([{...item, quantity: 1}, ...order]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
        
    };
    
    
    
    useEffect(function getGoods () {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        }).then(response => response.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);});        
    }, []);

    return <main className="container content">
        <Cart quantity={order.length}/>
        {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
    </main>
}

export {Shop}
import {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { BasketAlert } from "./BasketAlert.jsx";

function Shop () {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const handleBasketShow = (item) => {
        setIsBasketShow(!isBasketShow);
    }

    const addToBasket = (item) => {
        let itemIndex = order.findIndex(p => p.id === item.id);
        
        if(itemIndex < 0) {
            setOrder([{...item, quantity: 1}, ...order]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
        
    };
    
    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id);
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            return el.id === itemId ? {...el, quantity: el.quantity + 1} : el;
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            return el.id === itemId ? {...el, quantity: el.quantity - 1} : el;
        });
        setOrder(newOrder.filter(el => el.quantity > 0));
    };

    const closeAlert = () => {
        setAlertName("");
    }
    
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
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
        {isBasketShow && <BasketList order={order} 
                                    removeFromBasket={removeFromBasket}
                                    incQuantity={incQuantity}
                                    decQuantity={decQuantity}/>}
        {alertName && <BasketAlert name={alertName} closeAlert={closeAlert}/>}
    </main>
}

export {Shop}
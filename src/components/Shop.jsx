import { useEffect, useContext} from "react";
import { API_KEY, API_URL} from '../config';
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { BasketAlert } from "./BasketAlert.jsx";
import { ShopContext } from "../context";

function Shop () {
    const {loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext);

    useEffect(function getGoods () {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        }).then(response => response.json()).then(data => {
            setGoods(data.shop);});        
    }, []);

    return <main className="container content">
        <Cart/>
        {loading ? <Preloader/> : <GoodsList/>}
        {isBasketShow && <BasketList/>}
        {alertName && <BasketAlert/>}
    </main>
}

export {Shop}
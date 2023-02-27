import { createContext, useReducer } from 'react';
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    }

    value.addToBasket = (item) => {
        
        let itemIndex = value.order.findIndex(p => p.id === item.id);
        
        if(itemIndex < 0) {
            
            dispatch( {type: 'ADD_TO_BASKET', payload: {order: [{...item, quantity: 1}, ...value.order], alertName: item.name}});
        } else {
            const newOrder = value.order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                } else {
                    return orderItem;
                }
            });
            dispatch( {type: 'ADD_TO_BASKET', payload: {order: newOrder, alertName: item.name}});
        }
    }
    
    value.incQuantity = (itemId) => {
        const newOrder = value.order.map((el) => {
            return el.id === itemId ? {...el, quantity: el.quantity + 1} : el;
        });
        dispatch({type: "INC_QUANTITY", payload: {order: newOrder}});
    }
    
    
    value.decQuantity = (itemId) => {
        const newOrder = value.order.map((el) => {
            return el.offerId === itemId ? {...el, quantity: el.quantity - 1} : el;
        });
        dispatch({type: "DEC_QUANTITY", payload: {order: newOrder}});
    }
    
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
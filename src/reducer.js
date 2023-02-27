export function reducer(state, {type, payload}) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            }
        case 'REMOVE_FROM_BASKET': 
            return {
                ...state,
                order: state.order.filter(el => el.offerId !== payload.id),
            }
        case 'ADD_TO_BASKET':
            let itemIndex = state.order.findIndex(p => p.id === payload.item.id);
            if(itemIndex < 0) {
                return {
                    ...state,
                    order: [{...payload.item, quantity: 1}, ...state.order],
                    alertName: payload.item.name
                }
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if(index === itemIndex) {
                        return {...orderItem, quantity: orderItem.quantity + 1}
                    } else {
                        return orderItem;
                    }
                });
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.item.name
                }
            }

        case 'INC_QUANTITY': {
            const newOrder = state.order.map((el) => {
                return el.id === payload.itemId ? {...el, quantity: el.quantity + 1} : el;
            });
            return {
                ...state,
                order: newOrder,
            }
        }
        case 'DEC_QUANTITY': {
            const newOrder = state.order.map((el) => {
                return el.id === payload.itemId ? {...el, quantity: el.quantity - 1} : el;
            });
            return {
                ...state,
                order: newOrder.filter(el => el.quantity > 0),
            }
        }
        case 'HANDLE_BASKET_SHOW': {
            return {
                ...state,
                isBasketShow: payload.isBasketShow,
            }
        }
        default:
            return state;
    }
}
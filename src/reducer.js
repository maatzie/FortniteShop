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
            return {
                ...state, 
                order: payload.order,
                alertName: payload.alertName,
            }
        case 'INC_QUANTITY': {
            return {
                ...state,
                order: payload.order,
            }
        }
        case 'DEC_QUANTITY': {
            return {
                ...state,
                order: payload.order,
            }
        }
        default:
            return state;
    }
}
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_FAIL, MY_ORDER_SUCCESS, MY_ORDER_REQUEST, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "./constants/orderConstants"

export const orderReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:
        return{
            loading: true,
        }

case CREATE_ORDER_SUCCESS:
        return{
            loading:false,
            data: action.payload
        }

    case CREATE_ORDER_FAIL:
        return{
            loading:false,
            error: action.payload
        }
         
         default:
            return state
    }
}
export const myOrderReducer = (state = [], action) => {
    switch (action.type) {
        case MY_ORDER_REQUEST:
            return {
                loading: true,
            }

        case MY_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case MY_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}


export const orderdetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                loading: true,
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}
import { ACTIONS } from "../actions";
//import { combineReducers } from "redux";

export interface AppState {
    selected: string[];
    basket: { name: string; price: number; count: number }[];
}

const initialState: AppState = {
    selected: [],
    basket: [],
};

type action = {
    type: string;
    payload: any;
};

export default function reducer(state = initialState, action: action) {
    switch (action.type) {
        case ACTIONS.CATEGORY: {
            let index = state.selected.findIndex((el) => el === action.payload);
            if (action.payload === "Tüm Kategoriler") {
                return {
                    ...state,
                    selected: [],
                };
            } else if (state.selected.length === 0 || index < 0) {
                return {
                    ...state,
                    selected: [...state.selected, action.payload],
                };
            } else {
                return {
                    ...state,
                    selected: state.selected.filter((el) => el !== action.payload),
                };
            }
        }
        case ACTIONS.ADD_BASKET: {
            let { name, price } = action.payload;
            let basket: { name: any; price: any; count: number }[] = [...state.basket];

            if (
                state.basket.filter((el) => el.name === name).length > 0
            ) {
                state.basket.forEach((product, index) => {
                    if (product.name === action.payload.name) {
                        basket[index] = { ...product, count: product.count + 1 };
                    }
                });
            } else {
                basket.push({ name, price, count: 1 });
            }
            return { ...state, basket };
        }
        case ACTIONS.REMOVE_BASKET: {
            let basket: { name: any; price: any; count: number }[] = [...state.basket];
            state.basket.forEach((product, index) => {
                if (product.name === action.payload.name && product.count > 0) {
                    basket[index] = { ...product, count: product.count - 1 };
                }
            });
            return { ...state, basket };
        }
        default:
            return state;
    }
}

// app is small now but later on we can
// import reducer from different files and combine reducers
//export default combineReducers({ reducers });

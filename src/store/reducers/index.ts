import { ACTIONS } from "../actions";
//import { combineReducers } from "redux";

export interface AppState {
    selected: string[];
    totalPrice: number;
    totalCount: number;
}

const initialState: AppState = {
    selected: [],
    totalPrice: 0,
    totalCount: 0,
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
            }
            else if (state.selected.length === 0 || index < 0) {
                return {
                    ...state,
                    selected: [...state.selected, action.payload],
                };
            }
            else {
                return {
                    ...state,
                    selected: state.selected.filter((el) => el !== action.payload),
                };
            }
        }
        case ACTIONS.PRICE: {
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload,
            };
        }
        case ACTIONS.COUNT: {
            return {
                ...state,
                totalCount: state.totalCount + action.payload,
            };
        }
        default:
            return state;
    }
}

// app is small now but later on we can
// import reducer from different files and combine reducers
//export default combineReducers({ reducers });

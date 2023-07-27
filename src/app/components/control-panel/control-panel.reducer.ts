import { createReducer, on } from "@ngrx/store";
import { addProduct, resetProduct, setProduct, subtractProduct } from "./control-panel.actions";
import { Product } from "src/app/types/Product";

const initialState: Product = { id: "", name: "", quantity: 0 };

export const controlPanelReducer = createReducer(initialState,
    on(addProduct, (state) => {
        return { ...state, quantity: state.quantity + 1 };
    }),
    on(subtractProduct, (state) => {
        if (state.quantity == 0) return state;

        return {
            ...state, quantity: state.quantity - 1
        };
    }),
    on(resetProduct, (state)=>{
        return {...state, quantity: 0}
    }),
    on(setProduct, (state)=>{
        return  state
    })
    );
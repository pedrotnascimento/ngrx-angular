import { createAction, createReducer, on, props } from "@ngrx/store";
import { Product } from "./types/Product";


export const addProductQuantityAction = createAction("[Product] add product to cart", props<{ productId: string; }>());
export const subtractProductQuantityAction = createAction("[Product] subtract product to cart", props<{ productId: string; }>());
export const resetProductQuantityAction = createAction("[Product] reset product to cart", props<{ productId: string; }>());
export const setProductsAction = createAction("[Product] setting products", props<{ products: Product[]; }>());

const initialState: Product[] = [];
export const productReducer = createReducer(initialState,
    on(addProductQuantityAction, (state, { productId }) => {
        const newState= state.map(product => {
            const newProduct = {...product};
            if (newProduct.id == productId) {
                newProduct.quantity += 1;
            }
            return newProduct;
        });

        return newState;
    }),
    on(subtractProductQuantityAction, (state, {productId})=>{
        const newState = state.map(product=>{
            const newProduct = {...product};
            if(newProduct.id == productId){
                newProduct.quantity -= 1;
            }
            return newProduct;
        })
        return newState;
    }),
    on(resetProductQuantityAction, (state, {productId})=>{
        const newState = state.map(product=>{
            const newProduct = {...product};
            if(newProduct.id == productId){
                newProduct.quantity = 0;
            }
            return newProduct;
        })
        return newState;
    }),
    on(setProductsAction, (state, {products})=>{
        return products;
    }));
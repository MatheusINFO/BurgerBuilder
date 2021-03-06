import * as actionTypes from './actionsTypes';

export const addIngredients = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredients = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    };
};

export const initIngredients = () => {
    return{
        type: actionTypes.INIT_INGREDIENTS
    }
};
import { DELETE_FORM, SUBMIT_FORM } from "../constants";

const initialState = [];

const formData = (state = initialState, action) => {
    switch(action.type){
        case SUBMIT_FORM:
            return [...state,action.payload];
        case DELETE_FORM:
            return state.filter((_, index) => index !== action.payload);
            default:
                return state;
    }
};

export default formData

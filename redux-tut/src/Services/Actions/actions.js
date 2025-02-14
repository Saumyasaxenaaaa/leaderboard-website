import { DELETE_FORM, SUBMIT_FORM } from "../constants";

const submitForm = (formData) => {
    return {
        type : SUBMIT_FORM,
        payload : formData
    }
}

export const deleteForm = (index) => {
    return {
        type : DELETE_FORM,
        payload : index
    }
}

export default submitForm

import { OPEN_UPDATE_FORM } from "../Action-Creators/profileForm.AC";

export const updateFormReducer = (state = { openUpdateForm: false }, { type, payload }) => {
    switch (type) {
        case OPEN_UPDATE_FORM:
            return { openUpdateForm: payload };
        default:
            return state;
    }
}
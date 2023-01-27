import { UPDATE_OPEN,UPDATE_CLOSE } from "../Action-Creators/updateProfile.AC";

export const updateProfileReducer = (state={open:true},{type,payload}) => {
    switch (type) {
        case UPDATE_OPEN:
            return { open: payload };
        default:
            return state
    }
}
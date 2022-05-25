import { LOGOUT, LOGIN, RESTORE_USER, SIGNUP } from "../actions/UserActions";


export interface UserState {
    idToken: string | undefined;
    email: string | undefined;
    displayName: string | undefined;
}

const initialState: UserState = {
    idToken: undefined,
    email: undefined,
    displayName: undefined,
};

export interface Action {
    type: string;
    payload: any;
}

const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }
        case RESTORE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }
        case LOGOUT:
            return { ...state, idToken: undefined, email: undefined }
        case LOGIN:
        return  { ...state, idToken: action.payload.idToken, email: action.payload.email }

        default:
            return state; //does not do anything yet​   
    }
};

export default userReducer;
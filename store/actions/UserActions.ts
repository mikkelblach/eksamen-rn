import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const GET_USERINFO = 'GETUSERINFO';
export const LOGOUT = 'LOGOUT';
export const RESTORE_USER = 'RESTORE_USER';

export const logout = () => {
    SecureStore.deleteItemAsync('email');
    SecureStore.deleteItemAsync('token');
    return { type: LOGOUT }
}


export const restoreUser = (email:undefined, token:undefined, displayName:string) => {
    return { type: RESTORE_USER, payload: { email, idToken: token, displayName } };
};


export const signup = (email:undefined, password:undefined, displayName:string) => {
    return async (dispatch: any, getState: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFSa_Y02rvDpA6ft_MfOZKOfRs2xihW3g', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                displayName: displayName,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());
        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            console.log("error");
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
};




export const login = (email:undefined, password:undefined) => {
    return async (dispatch: any, getState: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFSa_Y02rvDpA6ft_MfOZKOfRs2xihW3g', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            //TODO ERROR MESSAGE
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: LOGIN, payload: { email: data.email, idToken: data.idToken } })
        }
    };
}; 



export const getUserInfo = (email:undefined, displayName:string) => {
    return async (dispatch:any, getState:any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBFSa_Y02rvDpA6ft_MfOZKOfRs2xihW3g', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            console.log("hello");
            //There was a problem..
            //TODO ERROR MESSAGE
        } else {
            await SecureStore.setItemAsync('email', JSON.stringify(data.users.email));
            await SecureStore.setItemAsync('displayName', JSON.stringify(data.users.displayName));
            await SecureStore.setItemAsync('token', data.users.idToken);
            dispatch({ type: GET_USERINFO, payload: { email: data.email, idToken: data.idToken } })
        }
    };
}; 




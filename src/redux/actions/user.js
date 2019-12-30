import { signInWithGoogle, signOut } from '../../apis/firebase/firebase';

const startLoading = () => {
    return {
        type: 'START_LOADING'
    }
}
const updateUserData = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        data: payload
    }
}
const updateUserError = (payload) => {
    return {
        type: 'UPDATE_USER_ERROR',
        error: payload
    }
}

export function loginUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(user => {
            dispatch(updateUserData(user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData({}));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}
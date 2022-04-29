export const Login = (state) => {
    return (dispatch) => {
        dispatch({
            type: "userlogin",
            payload: state
        })

    }
}
export const LogOut = (state) => {
    return (dispatch) => {
        dispatch({
            type: "userlogout",
            state:null
        })

    }
}
import { ADD_USER, DECREMENT, INCREMENT } from "./userActions";

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return[...state, action.payload]

        case INCREMENT:
            return state.map((user) => {
                if(user.id === action.payload.userid){
                    return {...user, likes: user.likes + 1}
                }

                return user;
            })

        case DECREMENT:
            return state.map((user) => {
                if(user.id === action.payload.userid){
                    return {...user, likes: user.likes - 1}
                }

                return user;
            })

        default:
            return state
    }
}

export default userReducer;
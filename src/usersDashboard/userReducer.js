import { ADD_USER, DECREMENT, INCREMENT } from "./userActions";

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return[...state, action.payload]

        case INCREMENT:
            return{
                ...state,
            }

        case DECREMENT:
            return{
                ...state,
            }

        default:
            return state
    }
}

export default userReducer;
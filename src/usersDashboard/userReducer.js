import { ADD_USER, DECREMENT, INCREMENT, REMOVE_USER } from "./userActions";

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return[...state, action.payload]

        //since all the user information are stored in the form of objects in an array,
        //we will use the map functionality and then return the object if it is not the user

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

        case REMOVE_USER:
            return state.filter(user => user.id !== action.payload.userid)

        default:
            return state
    }
}

export default userReducer;
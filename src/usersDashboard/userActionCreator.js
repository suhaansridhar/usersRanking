export function inc(){
    return{
        type: 'INCREMENT'
    }
}

export function dec(){
    return{
        type: 'DECREMENT'
    }
}

export function addUser(user){
    return{
        type: 'ADD_USER',
        payload: user
    }
}
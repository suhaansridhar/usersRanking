export function inc(userid){
    return{
        type: 'INCREMENT',
        payload: {userid}
    }
}

export function dec(userid){
    return{
        type: 'DECREMENT',
        payload: {userid}
    }
}

export function addUser(user){
    return{
        type: 'ADD_USER',
        payload: user
    }
}
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

export function remove(userid){
    return{
        type: 'REMOVE_USER',
        payload: {userid}
    }
}
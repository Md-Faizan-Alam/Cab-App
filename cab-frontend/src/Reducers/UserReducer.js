export const UserReducer = (user = 0,action) => {
    switch (action.type){
        case 'VALIDATE_USER':
            return user;
        default:
            return user;
    }
}
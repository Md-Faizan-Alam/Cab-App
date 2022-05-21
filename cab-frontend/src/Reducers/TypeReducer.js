export const TypeReducer = (userType = '',action) => {
    switch (action.type){
        case 'SET_TYPE':
            userType = action.toType;
            return userType;
        default:
            return userType;
    }
}
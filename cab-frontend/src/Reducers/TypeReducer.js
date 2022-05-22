export const TypeReducer = (userType = '' ,action) => {
    switch (action.type){
        case 'SET_TYPE':
            console.log('Entered the reducer to set type to '+action.toType);
            userType = action.toType;
            localStorage.setItem('userType',userType);
            return userType;
        default:
            userType = localStorage.getItem('userType');
            console.log('Returning default userType '+userType);
            return userType;
    }
}
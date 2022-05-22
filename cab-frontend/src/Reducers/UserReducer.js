export const UserReducer = (user = '', action) => {
    switch (action.type) {
        case 'VALIDATE_USER':
            user = action.payload;
            localStorage.setItem('user', user);
            return user;
        case 'SET_USER':
            user = action.payload;
            localStorage.setItem('user', user);
            return user;
        case 'SAVE_USER':
            console.log(action.payload);
            return user;
        default:
            localStorage.getItem('user');
            return user;
    }
}
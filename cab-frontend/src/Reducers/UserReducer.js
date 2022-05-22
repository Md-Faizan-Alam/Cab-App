export const UserReducer = (user = null, action) => {
    switch (action.type) {
        case 'VALIDATE_USER':
            user = action.payload;
            localStorage.setItem('user', user);
            return user;
        // return async()=>{
        //     const body = {
        //         type: action.userType,
        //         userName: action.userName,
        //         password: action.password
        //     }

        //     const response = await fetch('http://localhost:3333/validation', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(body)
        //     })
        //     user = await response.json();
        //     localStorage.setItem('user', user);
        //     return user;
        // }
        default:
            localStorage.getItem('user');
            return user;
    }
}
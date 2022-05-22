export const UserReducer = (user = null,action) => {
    switch (action.type){
        case 'VALIDATE_USER':
            if(action.payload.first_name === action.userName){
                console.log('The userName matched');
                if(action.payload.password === action.password){
                    console.log('The password matched');
                    user = action.payload;
                }
            }
            else{
                user = null;
            }
            console.log(user);
            return user;
        default:
            return user;
    }
}
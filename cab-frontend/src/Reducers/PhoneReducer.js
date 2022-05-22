export const PhoneReducer = (phone='',action)=>{
    switch (action.type) {
        case 'SET_PHONE':
            phone = action.phone;
            return phone
        default:
            return phone;
    }
}
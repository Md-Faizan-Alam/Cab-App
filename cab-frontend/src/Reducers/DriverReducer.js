export const DriverReducer = (driver = '',action)=>{
    switch (action.type) {
        case 'GET_DRIVER':
            driver = action.payload;
            localStorage.setItem('driver',driver);
            return driver;
    
        default:
            driver = localStorage.getItem('driver');
            return driver;
    }
}
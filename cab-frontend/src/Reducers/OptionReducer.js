export const OptionReducer = (options = '',action)=>{
    switch(action.type){
        case 'SET_OPTION':
            options = action.payload;
            return options;
        default:
            return options;
    }
}
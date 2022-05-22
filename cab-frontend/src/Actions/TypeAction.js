export const setType = (userType) => {
    console.log('setType has been dispatched with '+userType);
    return{
        type: 'SET_TYPE',
        toType: userType,
    }
}
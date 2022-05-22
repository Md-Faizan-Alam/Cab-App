export const StageReducer = (stage = 'booking',action)=>{
    switch (action.type) {
        case 'SET_STAGE':
            stage = action.stage;
            localStorage.setItem('stage',stage);
            return stage;

        default:
            stage = localStorage.getItem('stage');
            return stage;
    }
}
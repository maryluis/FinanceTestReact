

function dataReducer(state = [], action) {
    
    if(action.type === 'PUT_DATA') {
        return action.data;
    }
     else { 
        return state;
    }
}



const actionGotData = (data) => {
    return({type: 'GOT_DATA', data})
};

const actionPutData = (data) => {
    return({type: 'PUT_DATA', data})
};

const actionConnection = () => { 
    return(
    {type: 'DO_CONNECT'})
}
    


export {dataReducer, actionConnection, actionGotData, actionPutData};
const INITIAL_STATE = {
    appname : 'Chat App'
}

export default (state = INITIAL_STATE,action) =>{
    console.log("app action===>",action);
    switch(action.type){
        case "SETDATA":
                return({
                    ...state,
                    appname:action.data
                })
    }
    return state;
}
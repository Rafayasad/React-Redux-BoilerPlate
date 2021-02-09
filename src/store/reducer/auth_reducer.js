const INITIAL_STATE = {
    username : 'Rafay Asad',
    email:'asadrafay998@gmail.com'
}

export default (state = INITIAL_STATE , action) =>{
    console.log("auth action===>",action);
    return state;
}
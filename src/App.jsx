import React from 'react'
import './App.css';
import {connect} from 'react-redux';
import {set_data} from './store/action';

class App extends React.Component{
  render(){
    console.log("redux data=====>",this.props);
    return(
      <div style={{textAlign:'center'}}>
      <h1 style={{textAlign:'center'}}>hello world</h1>
      <button onClick={()=>this.props.set_data()}>set data</button>
      </div>
    )
  }
}
// to take only properties //
const mapStateToProps = (state) =>({
  user_name:state.auth.username,
  email:state.auth.email,
  app_name:state.app.appname
})

// to do only functional works // 
const mapDispatchToProps = (dispatch) => ({
  set_data: ()=> dispatch(set_data())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

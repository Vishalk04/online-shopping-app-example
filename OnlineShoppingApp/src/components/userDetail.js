
import React,{Component} from 'react';
import{bindActionCreators} from 'redux';
import{connect} from 'react-redux';

class UserDetail extends Component{
render(){
if(!this.props.user){
    return(<h1>Select issue....</h1>);
}
return(
<div>
<h3>ID : {this.props.user.id}</h3>
<h3>Task : {this.props.user.name}</h3>
</div>
);
}
}

function mapStateToProps(state){
    return{
        user:state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);

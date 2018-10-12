import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Selector from './Selector'; 

class UserList extends Component{


createIssueList(){
    return this.props.users.map( (user) =>{
        return(
            <li key={user.id}>{user.task}</li>
            );
            }   );
}



render () {
        return (
            <ul>
                 {
                   this.createIssueList()
                }
                    )
               }
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
         users: state.users

    };
}

export default connect(mapStateToProps)(UserList);
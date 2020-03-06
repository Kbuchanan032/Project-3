import React from 'react';

import './UsersList.css'

const UsersList = props => {
    if (props.items.length === 0){
        return <div className="center">
           <h2> No users found</h2>
        </div>
    }
};

export default UsersList;
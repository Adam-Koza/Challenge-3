import React from 'react';

const ProfileItem = props => {
    return (
        <li className="list-item">
            <span>{props.name}</span>
        </li>
    )
}
export default ProfileItem;
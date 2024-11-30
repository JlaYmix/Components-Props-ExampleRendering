import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
    render() {
        const { id, name, gender } = this.props;
        
        const ErrorName = name ? <p>Ім'я користувача: {name}</p> : <p>Ім'я користувача: відсутнє</p>;
        
        return (
        <div class={`user-card ${gender}`}>
            <p>Айді користувача: {id}</p>
            {ErrorName}
            <p>Гендер користувача: {gender}</p>
        </div>
        )
    }
}

export default UserCard;
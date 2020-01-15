import React, {Component} from 'react';

class UserCard extends Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        <img src={user.avatar_url} alt={user.id} />
        <h4>ID: {user.id}</h4>
        <h4>Login: {user.login}</h4>
        <h4>Followers: {user.followers}</h4>
      </div>
    );
  }
}

export default UserCard;

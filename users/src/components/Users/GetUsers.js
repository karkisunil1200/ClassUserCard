import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class GetUsers extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/karkisunil1200')
      .then(response => {
        console.log(response.data);
        this.setState({users: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.users} />
      </div>
    );
  }
}

export default GetUsers;

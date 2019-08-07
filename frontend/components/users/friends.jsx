import React from "react";
import UserIndexItem from "./user_index_item";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return this.props.friends.length > 0 ? (
      <div>
        <p>Friends:</p>
        <ul>
          {this.props.friends.map((user, idx) => (
            <UserIndexItem user={user} key={idx} />
          ))}
        </ul>
      </div>
    ) : (
      <p>No friends yet</p>
    );
  }

  componentDidMount() {
    this.props.getFriends(this.props.user.id);
  }
}

export default Friends;

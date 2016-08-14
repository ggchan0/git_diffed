import React, {PropTypes} from 'react';

class CompareForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { user1, loadUser1 } = this.props;

    return (
      <div>
        <h2>Compare Users</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="login">Login</label></td>
            <td>{user1.login}</td>
          </tr>
          <tr>
            <td><label htmlFor="id">ID</label></td>
            <td>{user1.id}</td>
          </tr>
          <tr>
            <td><label htmlFor="avatar_url">avatar url</label></td>
            <td>{user1.avatar_url}
            </td>
          </tr>
          <tr>
            <td><label htmlFor="followers">followers</label></td>
            <td>{user1.followers}
            </td>
          </tr>
          <tr>
            <td><label htmlFor="following">following</label></td>
            <td>{user1.following}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        <input type="submit" value="Load User 1" onClick={loadUser1}/>
      </div>
    );
  }
}

CompareForm.propTypes = {
  loadUser1: PropTypes.func.isRequired,
  loadUser2: PropTypes.func.isRequired,
  user1: PropTypes.object.isRequired,
  user2: PropTypes.object.isRequired
};

export default CompareForm;

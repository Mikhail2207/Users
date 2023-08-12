import React from 'react'

import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon" />
        <IoHammerSharp className="edit-icon" />
        <h3>
          {this.props.user.firstName} {this.props.user.lastName}
        </h3>
        <p>{this.props.user.description}</p>
        <hr />
        <p>Возраст: {this.props.user.age}</p>
        <p>{this.props.user.isHappy ? 'Счастлив :)' : 'Несчастен :('}</p>
      </div>
    )
  }
}

export { User }

import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

import { EditUserForm } from './EditUserForm'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false,
    }

    this.isShow = this.isShow.bind(this)
  }
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.props.user.id)}
          className="delete-icon"
        />
        <IoHammerSharp onClick={this.isShow} className="edit-icon" />
        <h3>
          {this.props.user.firstName} {this.props.user.lastName}
        </h3>
        <p>{this.props.user.description}</p>
        <hr />
        <p>Возраст: {this.props.user.age}</p>
        <p>{this.props.user.isHappy ? 'Счастлив :)' : 'Несчастен :('}</p>
        {this.state.editForm && (
          <EditUserForm
            user={this.props.user}
            onEdit={this.props.onEdit}
            isShow={this.isShow}
          />
        )}
      </div>
    )
  }

  isShow() {
    this.setState({ editForm: !this.state.editForm })
  }
}

export { User }

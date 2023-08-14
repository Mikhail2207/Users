import React from 'react'

class EditUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      description: this.props.user.description,
      age: this.props.user.age,
      isHappy: this.props.user.isHappy,
    }
  }

  render() {
    return (
      <form name="editUserForm">
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ firstName: e.target.value })}
          value={this.state.firstName}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ lastName: e.target.value })}
          value={this.state.lastName}
        />
        <textarea
          placeholder="Описание"
          onChange={(e) => this.setState({ description: e.target.value })}
          value={this.state.description}
        />
        <input
          placeholder="Возраст"
          onChange={(e) => this.setState({ age: e.target.value })}
          value={this.state.age}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
          checked={this.state.isHappy ? 'checked' : ''}
        />
        <button
          type="button"
          onClick={() => {
            document.forms.editUserForm.reset()
            let userEdit = {}
            userEdit = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              description: this.state.description,
              age: this.state.age,
              isHappy: this.state.isHappy,
              id: this.props.user.id,
            }

            this.props.isShow()

            this.props.onEdit(userEdit)

            this.setState({
              firstName: '',
              lastName: '',
              description: '',
              age: 1,
              isHappy: false,
            })
          }}
        >
          Редактировать
        </button>
      </form>
    )
  }
}

export { EditUserForm }

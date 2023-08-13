import React from 'react'

class AddUserForm extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      description: '',
      age: 1,
      isHappy: false,
    }
  }

  render() {
    return (
      <form name="addUserForm">
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <textarea
          placeholder="Описание"
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <input
          placeholder="Возраст"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            document.forms.addUserForm.reset()

            this.userAdd = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              description: this.state.description,
              age: this.state.age,
              isHappy: this.state.isHappy,
            }

            if (this.props.user) {
              this.userAdd.id = this.props.user.id

              this.props.isShow()
            }

            this.props.onAdd(this.userAdd)

            this.setState({
              firstName: '',
              lastName: '',
              description: '',
              age: 1,
              isHappy: false,
            })
          }}
        >
          Добавить
        </button>
      </form>
    )
  }
}

export { AddUserForm }

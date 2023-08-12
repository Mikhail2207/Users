import React from 'react'

class AddUserForm extends React.Component {
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
      <form>
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
        <button type="button">Добавить</button>
      </form>
    )
  }
}

export { AddUserForm }

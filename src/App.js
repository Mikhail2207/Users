import React from 'react'

import { Header } from './components/Header'
import { Users } from './components/Users'
import { AddUserForm } from './components/AddUserForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Toul',
          description:
            'Khv dhuhd hvfjv dvdvd uvd huh huvhdhvdhd hcuhdii hudc u uvdh',
          age: 25,
          isHappy: false,
        },
        {
          id: 2,
          firstName: 'Mike',
          lastName: 'Marley',
          description:
            'Ddnvd dhjvui dhvndvd udv uvdhvd uvdhi duvd shvd ihd u uvdsias vuvud',
          age: 34,
          isHappy: true,
        },
      ],
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  render() {
    return (
      <div>
        <Header title="Список пользователей" />
        <main>
          <Users
            users={this.state.users}
            onDelete={this.deleteUser}
            onEdit={this.editUser}
          />
        </main>
        <aside>
          <h4 class="title">Создание нового пользователя:</h4>
          <AddUserForm onAdd={this.addUser} />
        </aside>
      </div>
    )
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }

  editUser(user) {
    let allUsers = this.state.users

    allUsers[user.id - 1] = user
    this.setState({ users: allUsers })
    console.log(allUsers)
  }
}

export { App }

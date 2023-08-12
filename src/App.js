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
  }

  render() {
    return (
      <div>
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} />
        </main>
        <aside>
          <AddUserForm />
        </aside>
      </div>
    )
  }
}

export { App }



import './App.css'
import LikeButton from './components/LikeButton'
import UserList from './components/UserList'

function App() {
  return (
    <div className="app">
      <h1 className="app-title"></h1>

      {}
      <section className="task-section">
        <h2 className="task-title">Task 1: Like Button (Emoji Toggle)</h2>
        <p className="task-description">
          Click the heart to toggle between 🤍 (white) and ❤️ (red). Uses <code>useState</code>
        </p>
        <LikeButton />
      </section>

      {}
      <section className="task-section">
        <h2 className="task-title">Task 2: Fetching Data from API</h2>
        <p className="task-description">
          Fetching users from <code>jsonplaceholder.typicode.com/users</code> and displaying <strong>Name</strong> & <strong>Website</strong>.
        </p>
        <UserList />
      </section>
    </div>
  )
}

export default App

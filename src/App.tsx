import { Button } from 'antd'
import Router from './router'
import { Link } from '@/components'

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Button type="primary">按钮</Button>
      <Router />
    </div>
  )
}

export default App

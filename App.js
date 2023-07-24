// App.js

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './components/ProductScreen'

function App() {
  return (
    <Router>
      <div>
        <Route path="/product/:id" component={ProductScreen} />
      </div>
    </Router>
  )
}

export default App;

import React from 'react';
import { Header } from './components'
import { Home, Cart } from './pages';
import { Route, Link } from 'react-router-dom'



const App = () => {
  return (
    <div className="wrapper">
      <Link to="/">
        <Header />
      </Link>
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;

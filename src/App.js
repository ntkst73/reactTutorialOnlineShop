import React from 'react';
import { Header } from './components'
import { Home, Cart } from './pages';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

import { connect } from 'react-redux'
import { setPizzas as setPizzasAction } from './redux/actions/pizza'

// const App = () => {
//   // const [pizzas, setPizzas] = React.useState([]);
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//     .then(({data}) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);
//   return ;
// }
class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Link to="/">
          <Header />
        </Link>
        <div className="content">
          <Route exact path='/' render={() => <Home items={this.props.items} />} />
          <Route path='/cart' component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
};

const mapDispatchProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  }
}


export default connect(mapStateToProps, mapDispatchProps)(App); 
import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/*
- 2 components: class component vs function component
- JSX
*/

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;

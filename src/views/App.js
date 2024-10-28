import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';

/*
- 2 components: class component vs function component
- JSX
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from Reactjs (Tai Phung)
        </p>

        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;

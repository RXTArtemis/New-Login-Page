import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StarwarsBtn from './components/starwars-btn';
import NewNavbar from './components/newNavbar';
import NewLoginForm from './components/newLoginForm';


function App() {
  return (
    <div className="App">
     <NewNavbar />
     <br/>
     <NewLoginForm />
      <br/>
      <StarwarsBtn />
    </div>
  );
}

export default App;


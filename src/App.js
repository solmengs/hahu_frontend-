import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import About from './About'
import Menu from './Menu'
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    
    
     <Router>
     
     <Nav />
  
     <Route
       path="/"
       exact
       render={() => <Home />}
       />
      
     <Route
       path="/about"
       exact
       render={() => <About />}
     />
  
      
      <Route 
      path="/menu"
      exact
      render={() => 
      <Menu />
      } />
       
     
     


      

   </Router>
   
  );
}

export default App;

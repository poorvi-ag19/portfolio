
import './App.css';
import Footer from './components/footer';
import Header from './components/header'; 
import Introduction from './components/Introduction';
import Project from './components/Project';


function App() {



  return (
    <div className="App">
      
      <Header/>
  
      <Introduction/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;

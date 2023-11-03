import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { CompList } from './components/lista/listComp';
import { ElementsComp } from './components/elementsComp/elementsComp'; 

function App() {
  return (
    <div className="App">
      <h3>Zajęcia 1:</h3>
      <Header />
      <Footer />
      <h3>Zajęcia 33333333332:</h3>
      <CompList >
        <ElementsComp listItems={["First", "Second", "Third"]} />
      </CompList>  
    </div>
  );
}

export default App;

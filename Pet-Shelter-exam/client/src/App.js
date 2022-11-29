import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './components/Form'
import List from './components/List'
import EditForm from './components/EditForm';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pets/new" element={<Form />}/>
          <Route path='/' element={<List />}/>
          <Route path='/pets/edit/:id' element={<EditForm />}/>
          <Route path='/pets/:id' element={<OnePet />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

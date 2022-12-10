import {Routes, Route} from "react-router-dom"
import Header from "./components/header-component";
import Home from './pages/home.component';


function App() {
  return (
   <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
      </Route>
   </Routes>
  );
}

export default App;

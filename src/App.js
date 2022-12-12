import { Routes, Route } from "react-router-dom"
import Header from "./components/header/header-component";
import Home from './pages/home.component';
import { WindowWithProvider } from "contexts/window-with.context";


function App() {
  return (
    <WindowWithProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </WindowWithProvider>
  );
}

export default App;

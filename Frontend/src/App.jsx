import "./App.css"; // Assuming you have an App.css file for styles
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Success from "./pages/success";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     <Toaster></Toaster>
    </Router>
  );
}
export default App;

import './style/style.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from './pages/404';
import PrivacyPolice from './pages/PrivacyPolice';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/policy" element={<PrivacyPolice/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import './style/style.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from './pages/404';
import PrivacyPolice from './pages/PrivacyPolice';
import GDPR from './components/GDPR';
import Thanks from './pages/Thanks';
import Careers from './pages/Careers'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/policy" element={<PrivacyPolice/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/career" element={<Careers/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <GDPR/>
    </Router>
  );
}

export default App;

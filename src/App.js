import './style/style.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from './pages/404';
import PrivacyPolice from './pages/PrivacyPolice';
import GDPR from './components/GDPR';
import Thanks from './pages/Thanks';
import Careers from './pages/Careers'
import Vacancie from './pages/Vacancie'
import { useState } from "react"

function App() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/policy" element={<PrivacyPolice/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/career" element={<Careers/>}/>
        <Route path="/career/:id" element={<Vacancie/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <GDPR isClosed={isClosed} setIsClosed={setIsClosed}/>
    </Router>
  );
}

export default App;

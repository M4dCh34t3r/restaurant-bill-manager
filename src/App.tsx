import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { GlobalStyle } from './themes/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
    </Router>
  );
}

export default App;

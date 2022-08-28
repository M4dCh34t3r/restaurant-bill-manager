import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './themes/globalStyles';
import Navbar from './components/navbar/Navbar';
import Routes from './routes';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;

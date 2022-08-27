import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './themes/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
    </Router>
  );
}

export default App;

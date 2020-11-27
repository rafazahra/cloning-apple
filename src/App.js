import { BrowserRouter, Switch, Link } from 'react-router-dom';
import apple from './Component/apple';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={apple} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


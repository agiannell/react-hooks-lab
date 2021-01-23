import Header from './Components/Header';
import routes from './routes';
import './reset.css';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      {routes}
    </main>
  );
}

export default App;

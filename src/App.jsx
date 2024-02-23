import './App.css';
import Heading from './components/Heading';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Transactions from './components/Transactions';
import Revenue from './components/Revenue';


function App() {
  return (
    <>
      <Heading />
      <Revenue />
      <Login />
      <Dashboard />
      <Transactions />
    </>
  );
}

export default App;

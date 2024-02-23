import './App.css';
import Heading from './components/Heading';
import Dashboard from './components/Dashboard';
import Revenue from './components/Revenue';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <Heading />
      <Sidebar />
      <Revenue />
      <Dashboard />
    </>
  );
}

export default App;

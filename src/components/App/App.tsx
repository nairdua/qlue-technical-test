import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="bg-neutral-200 flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

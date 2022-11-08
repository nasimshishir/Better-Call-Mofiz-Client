import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Public Routes/Routes'
import './App.css';

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import './App.css';
import { RouterProvider} from "react-router-dom";
import router from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="max-w-md w-full mx-auto p-8 pb-24">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

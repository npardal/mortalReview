import "./App.css";
import { HomePage } from "./routes/HomePage";

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { CustomerAccessPage } from "./routes/CustomerAccessPage/CustomerAccessPage";


const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/customer', element: <CustomerAccessPage/>}
])

function App() {
return( <RouterProvider router={router}/>
);
}; 
export default App;

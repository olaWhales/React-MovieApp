import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Counter from './component/Counter'
import ROUTES from './routes/routes'


const routes = createBrowserRouter([...ROUTES])

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App ;

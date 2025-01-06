import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Posts } from './pages/posts'
import { Root } from './components/root'
import { Blog } from './pages/blog'
import { Main } from './pages/main'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: 'posts',
          element: <Posts />
        }, 
        {
          path: 'blog',
          element: <Blog />
        }
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

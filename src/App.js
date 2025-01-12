import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Posts } from './pages/posts'
import { Root } from './components/root'
import { Blog } from './pages/blog'
import { Main } from './pages/main'
import { Feedback } from './pages/feedback'
import { Post } from './pages/posts/post'
import { BlogElement } from './pages/blog/blogElement'
import { Error } from './pages/error'
import { AuthProvider } from './context/AuthContext'
import { Login } from './pages/login'
import { Protected } from './pages/protected'
import { CheckAuth } from './components/checkAuth'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
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
          path: 'posts/:postId',
          element: <Post />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/:blogId',
          element: <BlogElement />
        },
        {
          path: 'feedback',
          element: <Feedback />
        },
        {
          path: '/protected',
          element: <CheckAuth>
            <Protected />
          </CheckAuth>
        }
      ],
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;

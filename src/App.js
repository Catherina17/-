import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Posts } from './pages/posts'
import { Root } from './components/root'
import { Blog } from './pages/blog'
import { Main } from './pages/main'
import { Feedback } from './pages/feedback'
import { Post } from './pages/posts/post'
import { BlogElement } from './pages/blog/blogElement'
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

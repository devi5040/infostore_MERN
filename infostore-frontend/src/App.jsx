import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChangePassword, ForgotPassword, Login, Signup } from './components/auth'
import { Home, Documents, Education, PasswordStore, Profile, RootLayout } from './pages'

function App() {
  const router = createBrowserRouter( [{
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      },
      {
        path: 'change-password',
        element: <ChangePassword />
      },
      {
        path: 'documents',
        element: <Documents />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'password-store',
        element: <PasswordStore />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }] )
  return (
    <Provider store={ store }>
      <RouterProvider router={ router } />
    </Provider>
  )
}

export default App

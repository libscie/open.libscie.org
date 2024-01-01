import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
type PortalLayoutProps = {
  children?: React.ReactNode
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Open Startup</Link>
          </h1>
          {/* {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )} */}
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <main>{children}</main>
    </>
  )
}

export default PortalLayout

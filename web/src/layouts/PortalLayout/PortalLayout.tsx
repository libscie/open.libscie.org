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
          {/* <h1>
            <Link to={routes.home()}>Open Startup</Link>
          </h1> */}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          Managed by <Link to="https://libscie.org">Liberate Science GmbH</Link>
          .
        </p>
        <p>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Log in</Link>
          )}
        </p>
      </footer>
    </>
  )
}

export default PortalLayout

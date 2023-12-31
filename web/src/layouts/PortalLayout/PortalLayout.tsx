import { Link, routes } from '@redwoodjs/router'

type PortalLayoutProps = {
  children?: React.ReactNode
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Open Startup</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PortalLayout

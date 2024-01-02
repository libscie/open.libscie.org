import Footer from 'src/components/Footer/Footer'
type PortalLayoutProps = {
  children?: React.ReactNode
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PortalLayout

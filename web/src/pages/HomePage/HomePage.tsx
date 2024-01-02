import { Metadata } from '@redwoodjs/web'

import CashOnHandCell from 'src/components/CashOnHandCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <CashOnHandCell />
    </>
  )
}

export default HomePage

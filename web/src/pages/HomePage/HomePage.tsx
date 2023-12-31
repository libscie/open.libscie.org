import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="grid-container">
        <div className="grid-item">Test</div>
        <div className="grid-item">Test</div>
        <div className="grid-item">Test</div>{' '}
        <div className="grid-item">Test</div>
        <div className="grid-item">Test</div>
        <div className="grid-item">
          <p>Test</p>
          <p>Test</p>
        </div>
      </div>
    </>
  )
}

export default HomePage

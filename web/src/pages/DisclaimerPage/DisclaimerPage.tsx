import { Metadata } from '@redwoodjs/web'

const DisclaimerPage = () => {
  return (
    <>
      <Metadata title="Disclaimer" description="Disclaimer page" />

      <h1>Disclaimer Page</h1>
      <p>
        The information provided on the website{' '}
        <code>https://open.libscie.org</code> is provided for informational
        purposes only.
      </p>
      <p>
        We do not guarantee the accuracy of provided information. No rights or
        obligations can be inferred from the information as a result.
      </p>
      <p>
        Information may be corrected at any time at the sole discretion of
        Liberate Science GmbH.
      </p>
    </>
  )
}

export default DisclaimerPage

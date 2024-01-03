import { Grid, Container } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import CashOnHandCell from 'src/components/CashOnHandCell'
import LiabilitiesCell from 'src/components/LiabilitiesCell'
import NetAssetsCell from 'src/components/NetAssetsCell'
import NonCashAssetsCell from 'src/components/NonCashAssetsCell'
import SingleStatistic from 'src/components/SingleStatistic'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Container my="md">
        <Grid>
          <CashOnHandCell />
          <NonCashAssetsCell />
          <LiabilitiesCell />
          <NetAssetsCell />
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="MAU"
              description="Monthly Active Users"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="MRR"
              description="Monthly Recurring Revenue"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Burn rate"
              description="Average spend per month"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Runway"
              description="Cash on hand/burn rate"
              value="???"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <SingleStatistic
              title="Most recent blog"
              description="On https://libscie.org"
              value="???"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
